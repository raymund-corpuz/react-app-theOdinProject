import React from "react";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <h2>Main App</h2>
      <hr />
      <h3>Avatar</h3>
      <Profile type="type" circle="circle" />
    </div>
  );
};

export default App;
