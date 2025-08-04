import React from "react";
import GoURL from "./components/GoURL";

const App = () => {
  const handleButtonClick = () => {
    window.location.href = "https://www.youtube.com";
  };
  return (
    <div>
      <GoURL onURL={handleButtonClick} />
    </div>
  );
};

export default App;
