import { createContext, useContext, useState, useCallback } from "react";

const UiContext = createContext();

export function UIProvider({ children }) {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (key) => setActivePopup(key);
  const closePopup = () => setActivePopup(null);

  return (
    <UiContext.Provider value={{ activePopup, openPopup, closePopup }}>
      {children}
    </UiContext.Provider>
  );
}

export const useUi = () => {
  const context = useContext(UiContext);
  if (context === undefined) {
    throw new Error("useUi must be used within a UIProvider");
  }
  return context;
}
