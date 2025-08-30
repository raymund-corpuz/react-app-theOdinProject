import React from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Products = () => {
  return (
    <div>
      <h2>Welcome this is the Product page</h2>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
