import { useReducer, useState } from "react";
import { initialTodo, todoReducer } from "../../reducers/todoReducer";

export default function TodoApp() {
  const [stateTodo, dispatch] = useReducer(todoReducer, initialTodo);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  }

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Add activity"
          onChange={(e) => setText(e.target.value)}
        />

        <button>+ Add</button>
      </form>
      <ul>
        {stateTodo.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() =>
                dispatch({ type: "TOGGLE_TODO", payload: item.id })
              }
            />
            <span
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              {item.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: item.id })
              }
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
