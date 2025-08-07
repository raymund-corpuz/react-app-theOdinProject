import React from "react";

const CvOutput = ({ name, key, value }) => {
  return (
    <div key={key}>
      <p>
        {name.charAt(0).toUpperCase() + name.slice(1)} : <span>{value}</span>
      </p>
    </div>
  );
};

export default CvOutput;
