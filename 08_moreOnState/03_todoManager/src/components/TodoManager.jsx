import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoManager = () => {
  const [task, setTask] = useState({
    taskInput: "",
    difficulty: "",
    isComplete: false,
  });
  const [taskCollection, setTaskCollection] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!task.taskInput || !task.difficulty) {
      alert("Please fill out all the fields");
      return;
    }
    const newTask = { ...task, id: Date.now() };
    setTaskCollection([...taskCollection, newTask]);
    setTask({ taskInput: "", difficulty: "", isComplete: false });
  }

  function handleDelete(id) {
    setTaskCollection((prevCollection) =>
      prevCollection.filter((item) => item.id !== id)
    );
  }

  function handleComplete(id) {
    setTaskCollection((prevCollection) =>
      prevCollection.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  }

  useEffect(() => {
    console.log(task);
    console.log(taskCollection);
  }, [task, taskCollection]);
  return (
    <div>
      <h1>Todo Manager</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          name="taskInput"
          onChange={handleChange}
          value={task.taskInput}
        />
        <select
          name="difficulty"
          id=""
          onChange={handleChange}
          value={task.difficulty}
        >
          <option value="" disabled>
            Select Difficulty
          </option>
          <option value="Easy">Easy</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Hard">Hard</option>
        </select>
        <input type="submit" value={"Submit"} />
      </form>

      {taskCollection.map((task) => (
        <TodoList
          task={task.taskInput}
          key={task.id}
          id={task.id}
          difficulty={task.difficulty}
          onDelete={handleDelete}
          onComplete={handleComplete}
          isComplete={task.isComplete}
        />
      ))}
    </div>
  );
};

export default TodoManager;
