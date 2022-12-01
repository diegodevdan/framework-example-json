import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AccountSliceProps {
    name: string,
    firstLastName: string,
    secondLastName: string,
    birthday: string
}

const initialState:AccountSliceProps = {
    name: '',
    firstLastName: '',
    secondLastName: '',
    birthday: ''
}

export const accountComponentSlice = createSlice({
    name: 'account-component',
    initialState,
    reducers: {
        setAccountData: (state, action:PayloadAction<AccountSliceProps>) => {
            return action.payload;
        }
    }
})


export const {setAccountData} = accountComponentSlice.actions;
