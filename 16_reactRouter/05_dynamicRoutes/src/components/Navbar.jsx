import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home {"|"}
      </NavLink>
      <NavLink to="/about" end>
        About {"|"}
      </NavLink>
      <NavLink to="/contact">Contact {"|"}</NavLink>
      <NavLink to="/products">Product</NavLink>
    </nav>
  );
};

export default Navbar;
