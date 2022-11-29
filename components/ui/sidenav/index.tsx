import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.css';
import {useAppSelector} from "../../../hooks";
import {Account, Attention, Header, Help, Services, Shares, Warnings} from "./components";
import Link from "next/link";

interface SidenavProps {
    Account?: JSX.Element;
}

// TODO: importaciones dinamicas de componentes.
export const Sidenav:FC<SidenavProps> = ({}) => {
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
    }

    useEffect(() => {
        getInitialFetch();
    }, [])

    return (
        <div className={styles.main}>
            <Link href={'/'}>
                <h1>Home</h1>
            </Link>
            {
                subComponents.accountComponent && (
                    <Link href={comps.account.navigateTo}>
                        <Account />
                    </Link>
                )
            }
            {
                subComponents.attentionComponent && (
                    <Link href={comps.account.navigateTo}>
                        <Attention />
                    </Link>
                )
            }
            {
                subComponents.headerComponent && (
                    <Link href={comps.header.navigateTo}>
                        <Header />
                    </Link>
                )
            }
            {
                subComponents.helpComponent && (
                    <Link href={comps.header.navigateTo}>
                        <Help />
                    </Link>
                )
            }
            {
                subComponents.servicesComponent && (
                    <Link href={comps.services.navigateTo}>
                        <Services />
                    </Link>
                )
            }
            {
                subComponents.sharesComponent && (
                    <Link href={comps.shares.navigateTo}>
                        <Shares />
                    </Link>
                )
            }
            {
                subComponents.warningsComponent && (
                    <Link href={comps.warnings.navigateTo}>
                        <Warnings />
                    </Link>
                )
            }
        </div>
    );
}

