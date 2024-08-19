import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Category = {
  id: number;
  categoryName: string;
  isActive: boolean;
};
type categoryState = {
  categories: Category[];
};

const initialState: categoryState = {
  categories: [
    { id: 0, categoryName: "All", isActive: true },
    { id: 1, categoryName: "Electronics", isActive: false },
    { id: 2, categoryName: "Books", isActive: false },
    { id: 3, categoryName: "Clothing", isActive: false },
    { id: 4, categoryName: "Home & Kitchen", isActive: false },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleActive: (
      state: categoryState,
      action: PayloadAction<{ id: number }>
    ) => {
      state.categories = state.categories.map((category) =>
        category.id === action.payload.id
          ? { ...category, isActive: true }
          : { ...category, isActive: false }
      );
    },
  },
});
export const { toggleActive } = categorySlice.actions;
export default categorySlice.reducer;
