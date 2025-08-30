import { useState } from "react";

export default function ShowHideParagraph() {
  const [isShow, setIsShow] = useState(false);

  const paragraph =
    "Build a button that shows or hides a paragraph of text when clicked. The button should toggle the visibility using a boolean state.";

  function showParagraph() {
    console.log("show");
    setIsShow((isShow) => !isShow);
  }

  return (
    <div>
      <h1>Show / Hide Paragraph</h1>
      <button onClick={showParagraph}>Show</button>
      {isShow && <p>{paragraph}</p>}
    </div>
  );
}
