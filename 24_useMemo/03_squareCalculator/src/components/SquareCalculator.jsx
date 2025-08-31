import { useState, useMemo } from "react";

export function SquareCalculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const squareWithoutMemo = (() => {
    console.log("Calcuating square ( WITHOUT MEMO ... )");

    return number * number;
  })();

  const squareWithMemo = useMemo(() => {
    console.log("Calculating square ( WITH MEMO ...) ");
    return number * number;
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Without Memo {squareWithoutMemo}</p>
      <p>With Memo {squareWithMemo}</p>

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}
