import React from "react";
import { useRef } from "react";

const ScrollExample = () => {
  const divRef = useRef();

  const scrollToDiv = () => {
    divRef.current.scrollIntoView({ behavoir: "smooth" });
  };

  return (
    <div>
      <button onClick={scrollToDiv}>Scroll</button>
      <div style={{ height: "100vh" }}>Spacer</div>
      <div ref={divRef}>Hello, I'm here👌</div>
    </div>
  );
};

export default ScrollExample;
