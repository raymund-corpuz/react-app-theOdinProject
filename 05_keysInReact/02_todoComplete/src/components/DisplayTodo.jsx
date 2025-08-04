import React from "react";
import data from "./data.js";

const DisplayTodo = () => {
  return (
    <div>
      <h1>Display Todo</h1>

      <ul>
        {data.map(
          (item) =>
            item.isCompleted || (
              <li
                key={item.id}
                style={{ color: item.isCompleted ? "blue" : "red" }}
              >
                {item.task}{" "}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default DisplayTodo;
