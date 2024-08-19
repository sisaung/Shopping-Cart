import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import productSlice from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
