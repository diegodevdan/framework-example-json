import {NavigationLayout} from "../layouts";
import {GetServerSideProps} from "next";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks";
import {setSubComponentsOrder} from "../store/slices";

interface HomeProps {
    Tekapp: any
}

export default function Home({Tekapp}:HomeProps) {
    const dispatch = useAppDispatch();
    const [initConfig, setInitConfig] = useState(Tekapp || {});

    const setSidenavConfig = () => {
        dispatch(setSubComponentsOrder({
            ...initConfig.SidenavComponent,
            existsSidenav: true
        }));
    }

    useEffect(() => {
        setSidenavConfig();
    },[])

    return (
      <NavigationLayout>
        <h1>Prox to render</h1>
      </NavigationLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const resp = await fetch(`http://localhost:3000/api/tekapp`);
    const Tekapp = await resp.json();

    return{
        props: {
            Tekapp
        }
    }
}
