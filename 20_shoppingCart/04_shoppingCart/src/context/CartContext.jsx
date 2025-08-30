import React from "react";
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({}); // store in an object

  function addToCart(id, qty = 1) {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + qty,
    }));
  }
  function updateQuantity(id, qty) {
    setCart((prev) => ({
      ...prev,
      [id]: qty > 0 ? qty : 0,
    }));
  }
  function getTotalItems() {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCart() {
  return useContext(CartContext);
}
