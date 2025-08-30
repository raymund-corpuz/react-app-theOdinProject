import { useEffect, useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("white");

  function changeColour() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    const rgba = `rgba(${red}, ${green}, ${blue}, 0.5)`;
    document.body.style.backgroundColor = rgba;
    setColor(rgba);
  }

  useEffect(() => {
    console.log(color);
  }, [color]);
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "1rem",
        width: "300px",
        height: "500px",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <h1>Color Changer</h1>

      <button onClick={changeColour}>Change Color</button>
    </div>
  );
}
