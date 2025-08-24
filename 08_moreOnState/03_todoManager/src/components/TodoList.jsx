import React from "react";

const TodoList = ({
  task,
  difficulty,
  onDelete,
  id,
  onComplete,
  isComplete,
}) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "250px",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: isComplete ? "lightGreen" : "pink",
      }}
    >
      <h3 style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        {task}
      </h3>
      <p>Difficulty: {difficulty} </p>
      <input
        type="checkbox"
        name="complete"
        onChange={() => onComplete(id)}
      />{" "}
      <label htmlFor="done">Completed</label>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  );
};

export default TodoList;
