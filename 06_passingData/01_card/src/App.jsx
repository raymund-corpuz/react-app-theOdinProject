import React from "react";
import Card from "./components/Card";
import data from "./data/data.js";

const App = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {data.map((item, index) => (
        <Card
          title={item.title}
          description={item.description}
          key={index}
          bgColor={item.backgroundColor}
        />
      ))}
    </div>
  );
};

export default App;
