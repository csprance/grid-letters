import { combineReducers, configureStore } from "@reduxjs/toolkit";

import app from "./app";
import { useDispatch } from "react-redux";

export const rootReducer = combineReducers({
  app,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be resused to resolve types

export default store;
