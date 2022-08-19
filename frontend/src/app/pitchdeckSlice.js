import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pitch:[],
};

const pitchdeckSlice = createSlice({
  name: "pitchdeck",
  initialState,
  reducers: {
    updatePitch: (state, action) => {
      state.pitch = action.payload;
    },
  },
});
export const { updatePitch } = pitchdeckSlice.actions;
export default pitchdeckSlice.reducer;
