import { useState } from "react";

export default function MyCounter() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(1);

  function incrementCount() {
    console.log("Increment");
    setCount((count) => counter + count);
  }

  function decrementCount() {
    console.log("decrement");
    setCount((count) => count - counter);
  }
  function addCounter() {
    console.log("add counter");
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>My Counter</h1>
      <p>Count:{count}</p>
      <p>Counter: {counter}</p>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={addCounter}>Counter</button>
    </div>
  );
}
