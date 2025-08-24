import React from "react";
import PropTypes from "prop-types";

const RenderName = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
  name: "Zach",
};

export default RenderName;
