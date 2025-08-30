import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
      <h2>This is the Main App</h2>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
