import { createSlice } from "@reduxjs/toolkit";

const data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {
        email: null,
        token: null,
        name: null,
        is_entrepreneur: false,
        is_mentor: false,
    }
const authSlice = createSlice({
    name: "auth",
    initialState: data,
    reducers: {
        setCredentails: (state, { payload }) => {
            console.log(payload)
            state.email = payload.email;
            state.token = payload.token;
            state.name = payload.name;
            state.is_entrepreneur = payload.is_entrepreneur;
            state.is_mentor = payload.is_mentor;
        },
        logout: (state) => {
            state.email = null;
            state.token = null;
            state.name = null;
            state.is_entrepreneur = false;
            state.is_mentor = false;
            localStorage.removeItem('user');
        }
    }
})

export const { setCredentails, logout } = authSlice.actions;

export default authSlice.reducer