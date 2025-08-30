import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home{"|"}
      </NavLink>
      <NavLink to="/shop" end>
        Shop {"|"}
      </NavLink>
      <NavLink to="/cart" end>
        Cart
      </NavLink>
    </nav>
  );
};

export default Navbar;
