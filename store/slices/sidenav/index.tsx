import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface SidenavSubcomponentProps {
    order: number,
    loadData?: string,
    navigateTo?:string
}

interface SubComponentsProps {
    accountComponent:SidenavSubcomponentProps,
    warningsComponent:SidenavSubcomponentProps,
    headerComponent:SidenavSubcomponentProps,
    servicesComponent:SidenavSubcomponentProps,
    sharesComponent:SidenavSubcomponentProps,
    attentionComponent?: SidenavSubcomponentProps,
    helpComponent?: SidenavSubcomponentProps
}

interface SidenavComponentProps {
    existsSidenav: boolean,
    subComponents: SubComponentsProps
}

const initialState: SidenavComponentProps = {
    existsSidenav: false,
    subComponents: {
        accountComponent: {
            order: 1
        },
        headerComponent: {
            order: 5
        },
        servicesComponent: {
            order: 2
        },
        warningsComponent: {
            order: 3
        },
        sharesComponent: {
            order: 4
        },
    }
}

export const sidenavSlice = createSlice({
    name: 'sidenav',
    initialState,
    reducers: {
        setSubcomponents: (state, action:PayloadAction<SubComponentsProps>) => {
            state.subComponents = action.payload
        },
        showSideNav: (state, action:PayloadAction<boolean>) => {
            state.existsSidenav = action.payload;
        }
    },
})

export const { setSubcomponents, showSideNav } = sidenavSlice.actions

