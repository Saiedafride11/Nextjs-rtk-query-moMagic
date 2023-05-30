import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "./api/productsApi";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

setupListeners(store.dispatch);

