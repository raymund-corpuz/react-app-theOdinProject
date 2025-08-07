import React from "react";

const CvInput = ({ data, onChange }) => {
  return (
    <div className="mb-1  ">
      <label htmlFor="" className={data.label}>
        {data.title}:
      </label>
      <input
        name={data.name}
        type={data.type}
        className={data.input}
        onChange={onChange}
        value={data.value}
      />
    </div>
  );
};

export default CvInput;
