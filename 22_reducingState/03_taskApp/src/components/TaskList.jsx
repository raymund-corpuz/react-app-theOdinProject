import React, { useState } from "react";

const TaskList = ({ task, onDelete, onEdit, editId, onSave }) => {
  const [draft, setDraft] = useState(task.text);
  const isEdit = task.id === editId;

  return (
    <div>
      <input type="checkbox" />
      {isEdit ? (
        <>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button onClick={() => onSave(task.id, draft)}>save</button>
          <button onClick={() => onEdit(null)}>cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => onEdit(task.id)}>edit</button>
          <button onClick={() => onDelete(task.id)}>delete</button>
        </>
      )}
    </div>
  );
};

export default TaskList;
