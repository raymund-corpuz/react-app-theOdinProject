import React, { useReducer } from "react";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
