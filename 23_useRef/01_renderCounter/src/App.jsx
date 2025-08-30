import React from "react";
import RenderCounter from "./components/RenderCounter";
import InputFocus from "./components/InputFocus";
import ScrollExample from "./components/ScrollExample";

const App = () => {
  return (
    <div>
      <RenderCounter />
      <hr />
      <InputFocus />
      <hr />
      <ScrollExample />
    </div>
  );
};

export default App;
