import React from "react";
import data from "./data.js";
import Product from "./Product.jsx";

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {" "}
        {data.map((item) => (
          <Product
            name={item.name}
            price={item.price}
            isFeatured={item.isFeatured}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
