import { configureStore } from '@reduxjs/toolkit';
import getCompareProductsReducer from './features/products/compareProducts';
import getAllProductsReducer from './features/products/getProducts'
import getSingleProductReducer from './features/products/getSingleProduct';
import searchProductsReducer from './features/products/Search';
import getHomeDataReducer from './features/home/getHome';
import loginReducer from './features/auth/Login';

const store = configureStore({
  reducer: {
    compareProducts: getCompareProductsReducer,
    allProducts: getAllProductsReducer,
    singleProduct: getSingleProductReducer,
    searchProducts: searchProductsReducer,
    homeData: getHomeDataReducer,
    login:loginReducer,
  },
});

export default store;
