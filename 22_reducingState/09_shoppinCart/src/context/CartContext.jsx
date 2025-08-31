import { createContext, useEffect, useReducer } from "react";
import { initialState, cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
