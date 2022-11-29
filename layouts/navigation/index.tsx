import React from 'react';
import {Sidenav} from "../../components";
import {Navbar} from "../../components/ui/navbar";
import styles from './styles.module.css';
import {useAppSelector} from "../../hooks";

interface NavigationProps {
    children: JSX.Element | JSX.Element[],
}

export const NavigationLayout = ({children}:NavigationProps) => {
    const {...sidenav} = useAppSelector(state => state.sidenav);

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.contChildren}>
                {sidenav.existsSidenav && <Sidenav />}
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    );
};
