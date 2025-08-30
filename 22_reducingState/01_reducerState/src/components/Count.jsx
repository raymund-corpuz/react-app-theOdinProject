import React from "react";

const Count = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment_count": {
        return { count: state.count + 1 };
      }
      case "decrement_count": {
        return { count: state.count - 1 };
      }
      case "set_count": {
        return { count: action.value };
      }
      default: {
        throw new Error("unknown action: " + action.type);
      }
    }
  }
  return <div></div>;
};

export default Count;
