import React, { useState } from "react";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div>
      <button onClick={handleOpen}>Toggle</button>
      {isOpen && <p>Now you see me</p>}
    </div>
  );
};

export default Toggle;
