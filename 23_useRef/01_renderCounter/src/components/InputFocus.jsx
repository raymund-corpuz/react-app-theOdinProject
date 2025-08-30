import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
    </div>
  );
};

export default InputFocus;
