import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice({
    name: "register",
    initialState: {
        "details": null,
        "education": null,
        "work": null,
        "verification": null,
        'page': 0,
    },
    reducers: {
        setField: (state, {payload}) => {
            state[payload.field] = payload.value;
        }
    }
})

export const {setField} = registerSlice.actions;

export default registerSlice.reducer