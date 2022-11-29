import {NavigationLayout} from "../layouts";
import {GetServerSideProps} from "next";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks";
import {setData, setInitialConfig, setSubcomponents, showSideNav} from "../store/slices";
import {useRouter} from "next/router";

interface HomeProps {
    Tekapp: any
}

export default function Home({Tekapp}:HomeProps) {
    const dispatch = useAppDispatch();
    const {push} = useRouter();
    const [initConfig, setInitConfig] = useState(Tekapp || {});

    const setPageConfig = () => {
        dispatch(setInitialConfig({
            page: initConfig.initialPage.page,
            route: initConfig.initialPage.route,
            type: initConfig.initialPage.type,
            orientation: initConfig.initialPage.orientation,
            components: {
                footer: initConfig.initialPage.components.footer,
                lateral: initConfig.initialPage.components.lateral,
                header: initConfig.initialPage.components.header,
                main: initConfig.initialPage.components.main
            },
        }))
    }

    const setSidenavConfig = () => {
        dispatch(setSubcomponents({
            accountComponent: initConfig.SidenavComponent.subComponents.accountComponent,
            warningsComponent: initConfig.SidenavComponent.subComponents.warningsComponent,
            servicesComponent: initConfig.SidenavComponent.subComponents.servicesComponent,
            sharesComponent: initConfig.SidenavComponent.subComponents.sharesComponent,
            headerComponent: initConfig.SidenavComponent.subComponents.headerComponent
        }));
        dispatch(showSideNav(initConfig.SidenavComponent.existsSidenav));
    }

    const setComponentsData = () => {
        dispatch(setData({
            account: initConfig.componentsData.accountComponent,
            header: initConfig.componentsData.headerComponent,
            shares: initConfig.componentsData.sharesComponent,
            services: initConfig.componentsData.servicesComponent,
            warnings: initConfig.componentsData.warningsComponent,
        }))
    }

    useEffect(() => {
        setSidenavConfig();
        setPageConfig();
        setComponentsData();
        // push(initConfig.initialPage.route);
    },[initConfig.initialPage.route])

    return (
      <NavigationLayout>
        <h1>Main page</h1>
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
