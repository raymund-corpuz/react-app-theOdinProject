import React from "react";

const Button = ({ children, onSmach }) => {
  return <button onClick={onSmach}>{children}</button>;
};

export default Button;
