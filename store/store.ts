import { configureStore } from '@reduxjs/toolkit'
import {sidenavSlice, initialPageSlice} from './slices'

export const store = configureStore({
    reducer: {
        sidenav: sidenavSlice.reducer,
        initialPage: initialPageSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
