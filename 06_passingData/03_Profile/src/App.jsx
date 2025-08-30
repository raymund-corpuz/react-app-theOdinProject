import React from "react";
import Profile from "./components/Profile";
import data from "./data/data.js";

const App = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Profile username={item.username} key={index} bio={item.bio} />
      ))}
    </div>
  );
};

export default App;
