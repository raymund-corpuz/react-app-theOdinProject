import React, { useEffect, useRef } from "react";

const RenderCounter = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render count:", renderCount.current);
  });
  return (
    <div>
      <h1>Check the console</h1>
    </div>
  );
};

export default RenderCounter;
