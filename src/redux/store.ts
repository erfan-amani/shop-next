import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/userSlice/slice";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// Hooks
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

// Types
export type ReduxStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
