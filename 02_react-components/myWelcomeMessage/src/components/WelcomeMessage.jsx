import { useState } from "react";

export default function WelcomeMessage() {
  const [message, setMessage] = useState("Hello World");
  const showMessage = () => {
    setMessage("Welcome to React!");
  };
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={showMessage}>Click Me!</button>
    </div>
  );
}
