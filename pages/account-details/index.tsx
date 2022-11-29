import {NavigationLayout} from "../../layouts";
import {useAppSelector} from "../../hooks";
import {useEffect, useState} from "react";
import {FetchProps} from "../../interfaces";


export default function AccountPage(){

    const {account} = useAppSelector(state => state.componentsData);
    const {loadData} = account;
    const [info, setInfo] = useState({} as FetchProps);


    const getData = async () => {
        const resp = await fetch(loadData)
        const data = await resp.json();
        setInfo(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <NavigationLayout>
            <h1>Account page</h1>
            <h5>{info.title}</h5>
            <h5>{info.description}</h5>
            <h5>{info.data}</h5>
        </NavigationLayout>
    )
}
