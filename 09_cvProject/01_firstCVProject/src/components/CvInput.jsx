import React from "react";

const CvInput = ({ data }) => {
  return (
    <div className="mb-1  ">
      <label htmlFor="" className={data.label}>
        {data.name}:
      </label>
      <input type={data.type} className={data.input} />
    </div>
  );
};

export default CvInput;
