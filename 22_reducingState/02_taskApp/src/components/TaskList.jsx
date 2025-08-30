import React from "react";
import { useState } from "react";

const TaskList = ({ task, onDelete, onEdit, editId, onSave }) => {
  const [draft, setDraft] = useState(task.text);

  const isEditing = editId === task.id;
  return (
    <div>
      <input type="checkbox" />
      {isEditing ? (
        <>
          <input value={draft} onChange={(e) => setDraft(e.target.value)} />
          <button onClick={() => onSave(task.id, draft)}>Save</button>
          <button onClick={() => onEdit(null)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => onEdit(task.id)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>

    // <div>
    //   <input type="checkbox" />
    //   <span>{task.text} </span>
    //   <button onClick={() => onEdit(task.id)}>Edit</button>
    //   <button onClick={() => onDelete(task.id)}>Delete</button>
    // </div>
  );
};

export default TaskList;
