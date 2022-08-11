import { createSlice } from "@reduxjs/toolkit";

const gstSlice = createSlice({
    name: "gst",
    initialState: {
        data: null
    },
    reducers: {
        setGst: (state, { payload }) => {
            state.data = payload;
        }
    }
})

export const { setGst } = gstSlice.actions;

export default gstSlice.reducer