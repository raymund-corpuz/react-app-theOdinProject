import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const total = getTotalItems();
  return (
    <nav>
      <Link to="/">MyShop</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <p>
        <span>🛒{total}</span>
        <span> {total > 1 ? "Items in cart" : "Item in cart"}</span>{" "}
      </p>
    </nav>
  );
};

export default Navbar;
