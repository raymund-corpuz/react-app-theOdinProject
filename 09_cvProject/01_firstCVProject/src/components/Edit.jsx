import React from "react";
import Save from "./Save";

const Edit = ({ onEdit, isEdit, onSave }) => {
  return (
    <div className="container">
      {!isEdit ? (
        <button className="btn btn-secondary w-100 my-4" onClick={onEdit}>
          Edit
        </button>
      ) : (
        <Save onSave={onSave} isEdit={isEdit} />
      )}
    </div>
  );
};

export default Edit;
