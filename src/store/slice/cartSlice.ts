import { createSlice } from "@reduxjs/toolkit";

export type Cart = {
  id: number;
  productId: number;
  quantity: number;
};

type CartState = {
  cart: Cart[];
};

const initialState: CartState = {
  cart: [
    {
      id: 1,
      productId: 2,
      quantity: 3,
    },
    {
      id: 2,
      productId: 4,
      quantity: 3,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
