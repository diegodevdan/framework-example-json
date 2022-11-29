import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface SidenavSubcomponentProps {
    order: number,
    loadData?: string,
    navigateTo?:string
}

interface SidenavComponentProps {
    accountComponent:SidenavSubcomponentProps,
    warningsComponent:SidenavSubcomponentProps,
    servicesComponent:SidenavSubcomponentProps,
    sharesComponent:SidenavSubcomponentProps
}

const initialState: SidenavComponentProps = {
    accountComponent: {
        order: 1
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

export const sidenavSlice = createSlice({
    name: 'sidenav',
    initialState,
    reducers: {
        setOrder: (state, action:PayloadAction<SidenavComponentProps>) => {
            return action.payload
        },
    },
})

export const { setOrder } = sidenavSlice.actions

