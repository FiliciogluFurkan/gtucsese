import { configureStore } from "@reduxjs/toolkit";
import authSlice from "src/redux/AuthSlice";

export const store = configureStore({
  reducer: {
    authentication: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
