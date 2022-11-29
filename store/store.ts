import { configureStore } from '@reduxjs/toolkit'
import {sidenavSlice} from './slices'

export const store = configureStore({
    reducer: {
        sidenav: sidenavSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
