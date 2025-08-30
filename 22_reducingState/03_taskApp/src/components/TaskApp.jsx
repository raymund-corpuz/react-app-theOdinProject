import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TaskApp = () => {
  const [singleTask, setSingleTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setSingleTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), text: singleTask, done: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setSingleTask("");
  }

  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function handleEdit(id) {
    setEditId(id);
  }

  function handleSave(id, newTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newTask } : task
      )
    );
    setEditId(null);
  }
  return (
    <div>
      <TaskInput
        onChange={handleChange}
        onSubmit={handleSubmit}
        singleTask={singleTask}
      />

      {tasks.map((task) => (
        <TaskList
          task={task}
          key={task.id}
          onDelete={handleDelete}
          onEdit={handleEdit}
          editId={editId}
          onSave={handleSave}
        />
      ))}
    </div>
  );
};

export default TaskApp;
