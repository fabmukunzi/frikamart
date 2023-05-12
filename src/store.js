import { configureStore } from '@reduxjs/toolkit';
import getCompareProductsReducer from './features/products/compareProducts';
import getAllProductsReducer from './features/products/getProducts'
import getSingleProductReducer from './features/products/getSingleProduct';

const store = configureStore({
  reducer: {
    compareProducts: getCompareProductsReducer,
    allProducts: getAllProductsReducer,
    singleProduct: getSingleProductReducer
  },
});

export default store;
