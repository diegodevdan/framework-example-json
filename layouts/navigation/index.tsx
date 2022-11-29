import React from 'react';
import {Sidenav} from "../../components";
import {Navbar} from "../../components/ui/navbar";
import styles from './styles.module.css';
import {useAppSelector} from "../../hooks";

interface NavigationProps {
    children: JSX.Element | JSX.Element[],
}

export const NavigationLayout = ({children}:NavigationProps) => {
    const {existsSidenav} = useAppSelector(state => state.sidenav);

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.contChildren}>
                {/*{existsSidenav && <Sidenav />}*/}
                <Sidenav />
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    );
};
