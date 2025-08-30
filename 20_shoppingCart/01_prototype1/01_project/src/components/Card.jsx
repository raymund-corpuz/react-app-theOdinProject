import React from "react";

const Card = ({ title, image, price, rating, count }) => {
  return (
    <div
      style={{
        width: "180px",
        padding: "1rem",
        border: "1px solid gray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "0.5rem",
      }}
    >
      <img src={image} alt={title} width="160px" height="180px" />
      <div>
        <h3>
          {title} - ${price}
        </h3>
        <p>
          Rating: {rating} <span>Total: {count}</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
