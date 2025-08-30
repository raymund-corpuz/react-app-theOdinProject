import { useReducer } from "react";
import { cartReducer, initialCart } from "../reducers/cartReducer";

export default function Cart() {
  const [myCart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: { id: Date.now(), name: "Item A" },
          })
        }
      >
        Add Item A
      </button>

      {myCart.map((item) => (
        <div key={item.id}>
          <h3>
            {item.name} <span>id: {item.id}</span>
          </h3>
        </div>
      ))}
    </div>
  );
}
