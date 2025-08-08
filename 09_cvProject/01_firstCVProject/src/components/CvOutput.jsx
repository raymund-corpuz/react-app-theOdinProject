import React from "react";

const CvOutput = ({ name, value, isEdit, onChange }) => {
  const editInput = (
    <input
      type="text"
      className="form-control"
      onChange={onChange}
      name={name}
      value={value || ""}
    />
  );
  const editValue = <span>{value}</span>;

  return (
    <div className="mb-2">
      <p>
        {name.charAt(0).toUpperCase() + name.slice(1)} :{" "}
        {isEdit ? editInput : editValue}
      </p>
    </div>
  );
};

export default CvOutput;
