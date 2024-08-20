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
  cart: [
    {
      id: 1,
      productId: 2,
      quantity: 1,
    },
    {
      id: 2,
      productId: 4,
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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

export const { updateCartQuantity, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
