import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home {"|"}
        </NavLink>
        <NavLink
          to="/feature"
          end
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Feature {"|"}
        </NavLink>
        <NavLink
          to="/accessories"
          end
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Accessories {"|"}
        </NavLink>
        <NavLink
          to="/shop"
          end
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Shop
        </NavLink>
      </div>
      <div>
        <NavLink to="/login" end>
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
