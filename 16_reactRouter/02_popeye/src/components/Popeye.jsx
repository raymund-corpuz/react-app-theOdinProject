import React from "react";
import { Link } from "react-router-dom";

const Popeye = () => {
  return (
    <div>
      <h3>Hi, I am Popeye! i love to eat Spinach!</h3>
      <Link to="/">Click here to go back</Link>
    </div>
  );
};

export default Popeye;
