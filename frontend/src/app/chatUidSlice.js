import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uuid: "",
};

const chatUidSlice = createSlice({
  name: "chatUid",
  initialState,
  reducers: {
    updateUid: (state, action) => {
      state.uuid = action.payload;
    },
  },
});
export const { updateUid } = chatUidSlice.actions;
export default chatUidSlice.reducer;
