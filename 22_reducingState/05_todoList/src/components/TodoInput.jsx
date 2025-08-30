import React, { useState } from "react";

const TodoInput = ({ dispatch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", payload: { text } });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoInput;
