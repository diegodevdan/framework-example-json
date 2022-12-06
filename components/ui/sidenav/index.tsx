import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.css';
import {useAppSelector} from "../../../hooks";
import {Account, Attention, Header, Help, Services, Shares, Warnings} from "./components";
import Link from "next/link";
import {CardGeneric} from "../card-generic";
import _ from 'lodash';

interface SidenavProps {
    Account?: JSX.Element;
}

// TODO: importaciones dinamicas de componentes.
export const Sidenav: FC<SidenavProps> = ({}) => {
    const {subComponents} = useAppSelector(state => state.sidenav);
    const [sortComponents, setSortComponents] = useState([]);
    const {...comps} = useAppSelector(state => state.componentsData);
    const [components, setComponents] = useState({});
    const [sortedComponents, setSortedComponents] = useState([]);

    const getInitialFetch = async () => {
        const [account, services, shares, warnings] = await Promise.all([
            fetch(comps.account.loadData),
            fetch(comps.services.loadData),
            fetch(comps.shares.loadData),
            fetch(comps.warnings.loadData),
        ])
        // @ts-ignore
        setComponents(account, services, shares, warnings);

        // @ts-ignore
        setSortComponents(subComponents.accountComponent);
    }

    function sortElements(){

    }

    useEffect(() => {
        getInitialFetch();
    }, [])

    useEffect(() => {
        console.log(sortComponents);
    }, [sortComponents]);


    const getTekAppJSON = async () => {
        const resp = await fetch('http://localhost:3000/api/tekapp')
        const data = await resp.json();
        const srt = data.SidenavComponent.subComponents;
        const arr = [];
        arr.push(data.SidenavComponent.subComponents.accountComponent)
        arr.push(data.SidenavComponent.subComponents.warningsComponent)
        arr.push(data.SidenavComponent.subComponents.servicesComponent)
        arr.push(data.SidenavComponent.subComponents.sharesComponent)
        console.log(arr)
        console.log(arr.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)))
        // @ts-ignore
        setSortedComponents(arr.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)))
    }

    useEffect(() => {
        getTekAppJSON();
    }, [])

    return (
        <div className={styles.main}>
            <Link href={'/'}>
                <h1 className={styles.headerHome}>Home</h1>
            </Link>
            {
                subComponents.accountComponent && (
                    <Link href={comps.account.navigateTo}>
                        <Account/>
                    </Link>
                )
            }

            <div>
                <h1 className={styles.headerCheckDisplay}>Account Overview</h1>
                {/*{*/}
                {/*    Object.keys(subComponents) && Object.keys(subComponents).map(el => (*/}
                {/*        <div>*/}
                {/*            <CardGeneric*/}
                {/*                // @ts-ignore*/}
                {/*                data={subComponents[el]}*/}
                {/*            />*/}
                {/*        </div>*/}

                {/*    ))*/}
                {/*}*/}

                {
                    sortedComponents.map(el => (
                        <div>
                            <CardGeneric
                                // @ts-ignore
                                data={el}
                            />
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

