import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Home {"|"}
      </NavLink>
      <NavLink
        to="/about"
        end
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        About {"|"}
      </NavLink>
      <NavLink
        to="/contact"
        end
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Contact {"|"}
      </NavLink>
    </nav>
  );
};

export default Navbar;
