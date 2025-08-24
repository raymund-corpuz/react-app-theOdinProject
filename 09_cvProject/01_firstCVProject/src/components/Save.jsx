import React from "react";

const Save = ({ onSave }) => {
  return (
    <div className="container">
      <button className="btn btn-primary w-100 my-4" onClick={onSave}>
        Save
      </button>
    </div>
  );
};

export default Save;
