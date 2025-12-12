import { createContext, useContext, useState, useCallback } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = useCallback((e) => {
    const mode = e.target.value;
    setCurrentMode(mode);
    localStorage.setItem("themeMode", mode);
  }, []);

  const setColor = useCallback((color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  }, []);

  const value = {
    currentColor,
    currentMode,
    themeSettings,
    setThemeSettings,
    setMode,
    setColor,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
