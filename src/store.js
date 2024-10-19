import { configureStore } from '@reduxjs/toolkit';
import addProduct from './slices/addProdutSlice';

const store = configureStore({
  reducer: {
    addProduct,
  },
});

export default store;
