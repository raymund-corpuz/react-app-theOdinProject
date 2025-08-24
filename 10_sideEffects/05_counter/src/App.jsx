import React from "react";
import LifecycleDemo from "./components/LifecycleDemo";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      <hr />
      {show && <LifecycleDemo />}
    </div>
  );
};

export default App;
