import React from "react";

const Product = ({ name, price, isFeatured }) => {
  return (
    <li>
      <p>
        Product: {name} {isFeatured && <span>⭐ Featured</span>}{" "}
      </p>
      <p>Price: {price}</p>
    </li>
  );
};

export default Product;
