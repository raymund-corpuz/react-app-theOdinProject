import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrementByOne() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleIncrementByThree() {
    setCount((prevCount) => prevCount + 3);
  }

  return (
    <div>
      <h1>Counter Application</h1>
      <h3>Count: {count}</h3>
      <Button onSmach={handleIncrementByOne}>Increment by 1</Button>
      <Button onSmach={handleIncrementByThree}>Increment by 3</Button>
    </div>
  );
};

export default Counter;
