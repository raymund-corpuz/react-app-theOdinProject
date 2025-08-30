import React from "react";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
      <h2>Main App</h2>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
