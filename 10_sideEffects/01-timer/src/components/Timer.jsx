import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function handleStop() {
    setIsRunning((prev) => !prev);
  }
  return (
    <div>
      <h2>Stop Watch : {seconds} seconds</h2>

      <button onClick={handleStop}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Timer;
