import React from "react";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div>
      <UserCard name="Raymund" age={18} />
      <UserCard name="George" />
      <UserCard name="James" age={28} />
      <UserCard name="Michael" age={49} />
    </div>
  );
};

export default App;
