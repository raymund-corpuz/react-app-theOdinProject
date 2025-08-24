import React, { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  function showMessage() {
    setIsShown((prev) => !prev);
  }
  return (
    <div>
      <h1>Main App</h1>
      <Button onShowMessage={showMessage} isShown={isShown} />
      {isShown && <Message />}
    </div>
  );
};

export default App;
