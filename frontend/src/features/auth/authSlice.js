import { createSlice } from "@reduxjs/toolkit";

const data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {
        email: null,
        token: null,
        name: null,
        isMentor: false,
        isMentee: false,
    }
const authSlice = createSlice({
    name: "auth",
    initialState: data,
    reducers: {
        setCredentails: (state, { payload }) => {
            state.email = payload.email;
            state.token = payload.token;
            state.name = payload.name;
            state.isMentor = payload.isMentor;
            state.isMentee = payload.isMentee;
        },
        logout: (state) => {
            state.email = null;
            state.token = null;
            state.name = null;
            state.isMentor = false;
            state.isMentee = false;
            localStorage.removeItem('user');
        }
    }
})

export const { setCredentails, logout } = authSlice.actions;

export default authSlice.reducer