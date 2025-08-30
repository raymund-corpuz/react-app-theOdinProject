import React from "react";

const TaskInput = ({ onSubmit, onChange, singleTask }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={singleTask} onChange={onChange} />
      <button>Add task</button>
    </form>
  );
};

export default TaskInput;
