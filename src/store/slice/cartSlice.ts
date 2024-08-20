import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Cart = {
  id: number;
  productId: number;
  quantity: number;
};

type CartState = {
  cart: Cart[];
};

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (
      state: CartState,
      action: PayloadAction<{
        newCart: { id: number; productId: number; quantity: number };
      }>
    ) => {
      state.cart = [...state.cart, action.payload.newCart];
    },
    updateCartQuantity: (
      state: CartState,
      action: PayloadAction<{ id: number; q: number }>
    ) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity + action.payload.q }
          : el
      );
    },
    removeCart: (state: CartState, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addCart, updateCartQuantity, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
