import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  signUpToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state, action) => {
      state.user = null;
    },
    setSignUpToken: (state, action) => {
      state.signUpToken = action.payload;
    },
  },
});

export const {setUser, resetUser, setSignUpToken} = userSlice.actions;
export default userSlice.reducer;
