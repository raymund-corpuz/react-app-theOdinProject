import React from "react";
import { products } from "../data/data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h3>This is from the Product Page</h3>

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
