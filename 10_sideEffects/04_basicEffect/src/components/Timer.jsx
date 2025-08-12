import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const count = setInterval(() => {
      setSeconds((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => {
      clearInterval(count);
    };
  }, [isRunning]);

  function handleStop() {
    setIsRunning((prevRunning) => !prevRunning);
  }
  return (
    <div>
      <h1>My Timer</h1>
      <h3>Time runs in {seconds} seconds</h3>
      <button
        className={isRunning ? "btn btn-outline-danger" : "btn btn-primary"}
        onClick={handleStop}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Timer;
