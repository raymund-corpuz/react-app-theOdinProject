import React from "react";

const GoURL = ({
  onURL,
  text = "Go-to Youtube",
  color = "white",
  bgColor = "red",
  padding = " 0.5rem 1rem",
}) => {
  const buttonStyle = {
    color: color,
    backgroundColor: bgColor,
    padding: padding,
  };
  return (
    <div>
      <h1>Go URL</h1>

      <button onClick={onURL} style={buttonStyle}>
        {text}
      </button>
    </div>
  );
};

export default GoURL;
