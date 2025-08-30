import React from "react";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
