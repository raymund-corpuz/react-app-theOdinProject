import React from "react";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp/TodoApp";

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <TodoApp />
    </div>
  );
};

export default App;
