import React from "react";
import data from "./data";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {data.map((item) => (
          <TodoItem task={item.task} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
