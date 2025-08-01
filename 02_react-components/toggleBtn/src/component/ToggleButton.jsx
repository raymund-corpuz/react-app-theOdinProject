import { useState } from "react";

export default function ToggleButton() {
  const [active, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
    console.log(active);
  }
  return (
    <div>
      <h1>Toggle Button (ON / OFF )</h1>

      <button onClick={handleClick}>{active ? "ON" : "OFF"}</button>
    </div>
  );
}

// import { useState } from "react";

// export default function ToggleButton() {
//   const [isOn, setIsOn] = useState("OFF");
//   const [active, setIsActive] = useState(false);

//   function handleClick() {
//     setIsOn((isOn) => (active ? "ON" : "OFF"));
//     setIsActive((active) => !active);
//     console.log(active);
//   }
//   return (
//     <div>
//       <h1>Toggle Button (ON / OFF )</h1>

//       <button onClick={handleClick}>{isOn}</button>
//     </div>
//   );
// }
