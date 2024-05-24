import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    changeQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += action.payload.amount;
        if (product.quantity <= 0) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
