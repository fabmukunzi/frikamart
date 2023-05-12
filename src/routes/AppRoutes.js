import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductCard from '../components/product/ProductCard';
import PageLayout from '../layout/ProductsLayout';
import SingleProduct from '../components/product/SingleProduct';
import ProductsPage from '../pages/ProductsPage';
import Cart from '../components/product/Cart';
import ComparePage from '../pages/ComparePage';
import Wishlist from '../pages/Wishlist';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/stores" element={<ProductCard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
