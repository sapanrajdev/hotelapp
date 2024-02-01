import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import hotelsReducer from "./slices/hotelsSlice";

const store: any = configureStore({
  reducer: {
    hotelsData: hotelsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
