import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>No Product Found!</h2>;
  }

  return (
    <div>
      <h2>Welcome to the Product Details Page</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
