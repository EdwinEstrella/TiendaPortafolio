import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';

// Placeholder components
const Products = () => <div className="p-10 text-center">Products Page (Coming Soon)</div>;
const ProductDetails = () => <div className="p-10 text-center">Product Details Page (Coming Soon)</div>;
const Cart = () => <div className="p-10 text-center">Cart Page (Coming Soon)</div>;
const Login = () => <div className="p-10 text-center">Login Page (Coming Soon)</div>;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
