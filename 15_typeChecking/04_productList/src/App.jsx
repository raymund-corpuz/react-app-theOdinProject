import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const sampleProducts = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ];
  return (
    <div>
      <ProductList products={sampleProducts} />
    </div>
  );
};

export default App;
