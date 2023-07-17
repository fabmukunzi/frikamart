import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PageLayout from '../layout/ProductsLayout';
import SingleProduct from '../components/product/SingleProduct';
import ProductsPage from '../pages/ProductsPage';
import Cart from '../components/product/Cart';
import ComparePage from '../pages/ComparePage';
import Wishlist from '../pages/Wishlist';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/Register';
import ShopsPage from '../pages/ShopsPage';
import SingleShop from '../pages/SingleShop';
import Categories from '../components/Categories';
import SearchPage from '../pages/SearchPage';
import ContactPage from '../pages/ContactPage';
import MadeInAfrica from '../pages/MadeInAfrica';
import Profile from '../pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/stores" element={<ShopsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/store/:id" element={<SingleShop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search/:item" element={<SearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/madeinafrica" element={<MadeInAfrica />} />
      </Route>
      <Route path='/auth'>
        <Route path='/auth/login' element={<LoginForm />} />
        <Route path='/auth/register' element={<RegisterForm />} />
        <Route path='/auth/register/customer' element={<RegisterForm />} />
        <Route path='/auth/register/seller' element={<RegisterForm />} />
        <Route path='/auth/register/affliate' element={<RegisterForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
