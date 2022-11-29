import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import {useAppSelector} from "../../../hooks";
import {Account, Attention, Header, Help, Services, Shares, Warnings} from "./components";

export const Sidenav = () => {
    const {subComponents, existsSidenav} = useAppSelector(state => state.sidenav);
    const [components, setComponents] = useState([]);

    function sortSidenavComp(){
        // const comps = {...subComponents};
        // const sorted = Object.entries(comps);
    }

    useEffect(() => {
        sortSidenavComp();
    }, [])

    return (
        <div className={styles.main}>
            {
                subComponents.accountComponent && <Account />
            }
            {
                subComponents.attentionComponent && <Attention />
            }
            {
                subComponents.headerComponent && <Header />
            }
            {
                subComponents.helpComponent && <Help />
            }
            {
                subComponents.servicesComponent && <Services />
            }
            {
                subComponents.sharesComponent && <Shares />
            }
            {
                subComponents.warningsComponent && <Warnings />
            }
        </div>
    );
}

