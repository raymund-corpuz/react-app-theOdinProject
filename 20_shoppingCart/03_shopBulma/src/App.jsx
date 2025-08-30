import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ProductListPage />} />
      <Route path="/" element={<ProductDetailPage />} />
      <Route path="/" element={<CartPage />} />
      <Route path="/" element={<CheckoutPage />} />
      <Route path="/" element={<OrderConfirmationPage />} />
    </Routes>
  );
};

export default App;
