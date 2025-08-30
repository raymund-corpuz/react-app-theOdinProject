import { useReducer } from "react";
import { counterReducer, initialCounter } from "../reducers/counterReducer";

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialCounter);

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
