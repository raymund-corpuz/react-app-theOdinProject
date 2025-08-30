import React from "react";

const Card = ({ title, description, bgColor }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "250px",
        backgroundColor: bgColor,
        padding: "1rem",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
