import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Window = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h2>Window Width: {size.width}px</h2>
      <h2>Window Height: {size.height}px</h2>
    </div>
  );
};

export default Window;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const Window = () => {
//   const [size, setSize] = useState(0);

//   useEffect(() => {
//     const screenWidth = window.screen.width;
//     const screenHeigth = window.screen.height;
//     window.addEventListener("resize", () => {
//       setSize((screenHeigth * screenWidth) / 4);
//       console.log("Size :", size);
//     });
//   }, [size]);
//   return (
//     <div>
//       <h1>Window Size: {size}</h1>
//     </div>
//   );
// };

// export default Window;
