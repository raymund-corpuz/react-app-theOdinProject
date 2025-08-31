import { useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

export default function Cart() {
  const [myCart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_CART",
            payload: { id: Date.now(), name: "Shop Item" },
          })
        }
        value={"Another Qty"}
      >
        Add 1 Qty
      </button>

      <ul>
        {myCart.map((item) => (
          <li key={item.id}>
            {item.name} {" | "} <span>{item.id}</span>
            {" | "}
            <span>{item.qty}</span>
            <span
              onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
            >
              ➕
            </span>
            <span
              onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
            >
              ➖
            </span>
            <span
              onClick={() =>
                dispatch({ type: "DELETE_CART", payload: item.id })
              }
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
