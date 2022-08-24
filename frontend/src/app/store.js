import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import firebaseReducer from "../features/firebase/firebaseSlice";
import chatUidReducer from "./chatUidSlice";
import pitchdeckReducer from "./pitchdeckSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    firebase: firebaseReducer,
    chatUid: chatUidReducer,
    pitchdeck: pitchdeckReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
