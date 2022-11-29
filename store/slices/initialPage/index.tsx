import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type orientation = 'left' | 'right';

type ComponentTypes = 'SidenavComponent' | 'HeaderComponent' | 'CheckDisplayComponent' | 'FooterComponent'

interface PageComponents {
    lateral: ComponentTypes,
    header: ComponentTypes,
    main: ComponentTypes,
    footer: ComponentTypes
}

interface InitialPageProps {
    page: string,
    route: string,
    type: string,
    orientation: orientation,
    components: PageComponents
}

const initialState:InitialPageProps  = {
    page: 'Home',
    route: '/home',
    type: 'MainTemplate',
    orientation: "left",
    components: {
        lateral: "SidenavComponent",
        header: "HeaderComponent",
        main: "CheckDisplayComponent",
        footer: "FooterComponent"
    }
}

export const initialPageSlice = createSlice({
    name: 'sidenav',
    initialState,
    reducers: {
        setInitialConfig: (state, action:PayloadAction<InitialPageProps>) => {
            return action.payload;
        },
    },
})

export const { setInitialConfig } = initialPageSlice.actions
