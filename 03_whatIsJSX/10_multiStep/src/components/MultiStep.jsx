import React from "react";
import { data } from "./data.js";
import { useState } from "react";
import { useEffect } from "react";

const MultiStep = () => {
  const [start, setStart] = useState(0);
  function handlePrev() {
    setStart((prev) => --prev);
    if (start <= 0) {
      setStart((prev) => (prev = data.length - 1));
    }
  }
  function handleNext() {
    setStart((prev) => ++prev);
    if (start >= data.length - 1) {
      setStart((prev) => (prev = 0));
    }
  }

  useEffect(() => {
    console.log(start);
  }, [start]);
  return (
    <div>
      <h1>Multi Step</h1>

      <div style={{ border: "1px solid gray", textAlign: "center" }}>
        <h1>{data[start].step}</h1>
        <h3>{data[start].title}</h3>
        <p>{data[start].content}</p>
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default MultiStep;
