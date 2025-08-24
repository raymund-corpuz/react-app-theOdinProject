import React from "react";
import ToggleList from "./components/ToggleList";
import data from "./components/data";
import { useState } from "react";

const App = () => {
  const [isShowProduct, setIsShowProduct] = useState(false);

  function handleShowProduct() {
    setIsShowProduct((prev) => !prev);
  }
  return (
    <div>
      <h1>Toggle List</h1>
      <button onClick={handleShowProduct}>
        {!isShowProduct ? "Show Product List" : "Hide Product List"}
      </button>
      <ul>
        {data.map((item) => {
          return (
            isShowProduct && (
              <ToggleList name={item.name} price={item.price} key={item.id} />
            )
          );
        })}
      </ul>
    </div>
  );
};

export default App;
