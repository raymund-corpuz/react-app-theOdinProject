import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <h2>CSS Modules</h2>
      <div>
        <h3>Button</h3>
        <Button type={"primary"} label={"Click Me"} />
        <Button type={"danger"} label={"Warning"} />
        <hr />
        <Card />
        <hr />
      </div>
    </div>
  );
};

export default App;
