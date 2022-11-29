import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ComponentData {
    loadData: string,
    navigateTo: string
}

interface InitialPageProps {
    account: ComponentData,
    warnings: ComponentData,
    services: ComponentData,
    shares: ComponentData,
    header: ComponentData
}

const initialState: InitialPageProps = {
    account: {
        loadData: '',
        navigateTo: '',
    },
    warnings: {
        loadData: '',
        navigateTo: '',
    },
    shares: {
        loadData: '',
        navigateTo: '',
    },
    services: {
        loadData: '',
        navigateTo: '',
    },
    header: {
        loadData: '',
        navigateTo: '',
    },
}

export const componentsDataSlice = createSlice({
    name: 'components-data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<InitialPageProps>) => {
            return action.payload;
        },
    },
})

export const {setData} = componentsDataSlice.actions
