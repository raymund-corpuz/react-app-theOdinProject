import React from "react";

const TaskInput = ({ onChange, onSubmit, text }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add task"
        onChange={onChange}
      />
      <button>Add</button>
    </form>
  );
};

export default TaskInput;
