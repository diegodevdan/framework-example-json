import React from 'react';
import {Sidenav} from "../../components";
import {Navbar} from "../../components/ui/navbar";
import styles from './styles.module.css';

interface NavigationProps {
    children: JSX.Element | JSX.Element[]
}
export const NavigationLayout = ({children}:NavigationProps) => {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.contChildren}>
                <Sidenav />
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    );
};
