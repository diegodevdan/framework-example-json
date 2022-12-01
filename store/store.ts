import { configureStore } from '@reduxjs/toolkit'
import {sidenavSlice, initialPageSlice, componentsDataSlice} from './slices'
import {accountComponentSlice} from './slices/account-component'

export const store = configureStore({
    reducer: {
        sidenav: sidenavSlice.reducer,
        initialPage: initialPageSlice.reducer,
        componentsData: componentsDataSlice.reducer,
        accountComponent: accountComponentSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
