import { useState } from "react";
import { useContext, createContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  function getTheme() {
    setTheme((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={{ theme, getTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
