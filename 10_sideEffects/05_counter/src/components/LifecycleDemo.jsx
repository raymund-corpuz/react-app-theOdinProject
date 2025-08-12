import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(" ✅ Component Mounted");

    return () => {
      console.log("❌ Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log(`🔄 Component Updated - Count is now: ${count}`);
  });
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleDemo;
