import React from "react";

const ToggleList = ({ name, price }) => {
  return (
    <li>
      <p style={{ color: "blue" }}>
        Product: {name} <span style={{ color: "green" }}> Price: {price}</span>
      </p>
    </li>
  );
};

export default ToggleList;
