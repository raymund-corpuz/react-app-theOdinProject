import React from "react";

const Button = ({ onShowMessage, isShown }) => {
  return (
    <div>
      <button onClick={onShowMessage}>
        {!isShown ? "Show Message" : "Hide Message"}
      </button>
    </div>
  );
};

export default Button;
