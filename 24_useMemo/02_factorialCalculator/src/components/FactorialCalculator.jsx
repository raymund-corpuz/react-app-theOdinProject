import { useState, useMemo } from "react";

function factorial(n) {
  console.log("Calculating factorial ...", n + 1);

  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 100000; j++) {
      console.log("0");
    }
    result *= i;
  }
  return result;
}

export function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const fact = useMemo(() => factorial(number), [number]);
  return (
    <div>
      <h2>factorial Calculator</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <p>
        Factorial of {number} is: <b>{fact}</b>
      </p>

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}
