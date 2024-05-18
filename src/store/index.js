import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
