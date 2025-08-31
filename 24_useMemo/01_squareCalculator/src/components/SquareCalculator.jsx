import { useState, useMemo } from "react";

export default function SquareCalculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const squareWithoutMemo = (() => {
    console.log("Calculating square (WITHOUT useMemo)...");
    return number * number;
  })();

  const squareWithMemo = useMemo(() => {
    console.log("Calculating square (WITH useMemo)...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Square Calculator</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <p>Square (without useMemo): {squareWithoutMemo} </p>
      <p>Square (with useMemo) : {squareWithMemo}</p>

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}
