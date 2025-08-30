import React from "react";
import { products } from "../data/data";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>No Product Found!</h2>;
  }
  return (
    <div>
      <h3>This is the Product Details Page</h3>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
