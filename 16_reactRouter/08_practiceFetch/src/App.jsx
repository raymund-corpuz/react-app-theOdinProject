import React from "react";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
