import React, { useReducer } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "Build a project", done: false },
];

function reducerTodo(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, done: false },
      ];
    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducerTodo, initialTodos);
  return (
    <div>
      <h2>Todo App</h2>
      <TodoInput dispatch={dispatch} />
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoApp;
