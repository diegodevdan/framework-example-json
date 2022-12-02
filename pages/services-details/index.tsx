import {NavigationLayout} from "../../layouts";
import {useAppSelector} from "../../hooks";
import {useEffect, useState} from "react";
import {FetchProps} from "../../interfaces";
import styles from "../account-details/styles.module.css";
import {Button} from "@mantine/core";
import Link from "next/link";


export default function ServicesPage(){

    const {services} = useAppSelector(state => state.componentsData);
    const {loadData} = services;
    const [info, setInfo] = useState({} as FetchProps);


    const getData = async () => {
        const resp = await fetch(loadData)
        const data = await resp.json();

        setInfo(data);

        console.log(data)
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <NavigationLayout>
            <h1>Services page</h1>
            <h5>{info.title}</h5>
            <h5>{info.description}</h5>
            <h5>{info.data}</h5>

            <Link href={'/account-details'} >
                <Button
                    variant={'outline'}
                    color={'dark'}
                    type={'submit'}
                    radius="xs"
                    size={'md'}
                    className={styles.button}
                >
                    Back
                </Button>
            </Link>
        </NavigationLayout>
    )
}
