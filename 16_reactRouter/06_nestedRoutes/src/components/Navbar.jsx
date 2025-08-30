import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <NavLink
        to="/dashboard"
        end
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Dashboard{"|"}
      </NavLink> */}
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Home{"|"}
      </NavLink>
      <NavLink
        to="/about"
        end
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        About {"|"}
      </NavLink>
      <NavLink
        to="/contact"
        end
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Contact {"|"}
      </NavLink>
      <NavLink
        to="/products"
        end
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        {" "}
        Product
      </NavLink>
    </nav>
  );
};

export default Navbar;
