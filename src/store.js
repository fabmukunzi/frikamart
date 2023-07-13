import { configureStore } from '@reduxjs/toolkit';
import getCompareProductsReducer from './features/products/compareProducts';
import getAllProductsReducer from './features/products/getProducts';
import getSingleProductReducer from './features/products/getSingleProduct';
import searchProductsReducer from './features/products/Search';
import getHomeDataReducer from './features/home/getHome';
import loginReducer from './features/auth/Login';
import getCategoriesReducer from './features/products/category';
import addToCartReducer from './features/cart/addToCart';
import getCartReducer from './features/cart/getCart';
import removeCartItemReducer from './features/cart/removeItem';
import getStoresReducer from './features/stores/getAll';
import getSingleStoreReducer from './features/stores/getSingle';
import updateCartReducer from './features/cart/updateCart';
import clearCartReducer from './features/cart/clearCart';
import ratingReducer from './features/products/rating';
import profileReducer from './features/auth/profile';

const store = configureStore({
  reducer: {
    compareProducts: getCompareProductsReducer,
    allProducts: getAllProductsReducer,
    singleProduct: getSingleProductReducer,
    searchProducts: searchProductsReducer,
    homeData: getHomeDataReducer,
    login: loginReducer,
    categories: getCategoriesReducer,
    addToCart: addToCartReducer,
    cart: getCartReducer,
    removeCartItem: removeCartItemReducer,
    stores: getStoresReducer,
    store: getSingleStoreReducer,
    updateCart: updateCartReducer,
    clearCart: clearCartReducer,
    rating: ratingReducer,
    profile: profileReducer,
  },
});

export default store;
