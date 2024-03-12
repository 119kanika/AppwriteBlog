 //file created for tracking user authentication.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false, //user not authenticated
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //login and logout are the actions which we export.
        login: (state, action) => {
            state.status = true; //if login then make status true.
            state.userData = action.payload.userData;
        }, //payload- holds actual data in redux action object
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;