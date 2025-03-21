import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductInfo } from "../types/types.tsx";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as IProductInfo[],
  reducers: {
    addToCart: (state, action: PayloadAction<IProductInfo>) => {
      if (state.find((item) => item.id === action.payload.id)) {
        const product = state.find((item) => item.id === action.payload.id);
        product.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    deleteFromCart: (state, action: PayloadAction<IProductInfo>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action: PayloadAction<IProductInfo>) => {
      const product = state.find((item) => item.id === action.payload.id);
      product!.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<IProductInfo>) => {
      const product = state.find((item) => item.id === action.payload.id);
      product!.quantity -= 1;
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
