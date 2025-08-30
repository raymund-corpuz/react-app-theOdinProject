import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";

const Navbar = () => {
  const { theme, getTheme } = useTheme();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <button onClick={getTheme}>{theme ? "Light" : "Dark"}</button>
      <p>{theme ? "☀️" : "🌙"}</p>
    </nav>
  );
};

export default Navbar;
