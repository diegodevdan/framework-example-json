import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.css';
import {useAppSelector} from "../../../hooks";
import {Account, Attention, Header, Help, Services, Shares, Warnings} from "./components";
import Link from "next/link";
import {CardGeneric} from "../card-generic";

interface SidenavProps {
    Account?: JSX.Element;
}

// TODO: importaciones dinamicas de componentes.
export const Sidenav: FC<SidenavProps> = ({}) => {
    const {subComponents} = useAppSelector(state => state.sidenav);
    const {...comps} = useAppSelector(state => state.componentsData);
    const [components, setComponents] = useState({});

    const getInitialFetch = async () => {
        const [account, services, shares, warnings] = await Promise.all([
            fetch(comps.account.loadData),
            fetch(comps.services.loadData),
            fetch(comps.shares.loadData),
            fetch(comps.warnings.loadData),
        ])
        // @ts-ignore
        setComponents(account, services, shares, warnings)
        // console.log(subComponents)
        // console.log(Object.keys(subComponents))
    }

    useEffect(() => {
        getInitialFetch();
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
                {
                    Object.keys(subComponents) && Object.keys(subComponents).map(el => (
                        <div>
                            <CardGeneric
                                data={subComponents[el]}
                            />
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

