import React from "react";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Loader from "./components/Loader";
import { useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? <Loader /> : <Dashboard />}</div>;
};

export default App;
