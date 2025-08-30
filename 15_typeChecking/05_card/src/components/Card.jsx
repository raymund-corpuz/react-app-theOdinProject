import React from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        margin: "10px auto",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
