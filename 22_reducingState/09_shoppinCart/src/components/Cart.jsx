import { useContext } from "react";
// import { cartReducer, initialState } from "../reducers/cartReducer";

import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  //   const [myCart, dispatch] = useReducer(cartReducer, initialState);

  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <h2>Cart Items</h2>

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

      {state.map((item) => (
        <div key={item.id}>
          {item.name} (Qty: {item.qty})
          <button
            onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
          >
            ➕
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
          >
            ➖
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_CART", payload: item.id })}
          >
            ❌
          </button>
        </div>
      ))}

      {/* <button
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
      </ul> */}
    </div>
  );
}
