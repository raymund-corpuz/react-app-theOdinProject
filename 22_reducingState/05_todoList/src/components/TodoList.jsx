import React from "react";

const TodoList = ({ todo, dispatch }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
      />
      <span>{todo.text} </span>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
};

export default TodoList;
