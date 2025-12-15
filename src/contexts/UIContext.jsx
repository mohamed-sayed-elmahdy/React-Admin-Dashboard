import { createContext, useContext, useState, useCallback } from "react";

const UiContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function UIProvider({ children }) {
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = useCallback((key) => {
    setIsClicked({ ...initialState, [key]: true });
  }, []);

  const closeAll = useCallback(() => {
    setIsClicked(initialState);
  }, []);

  const value = { isClicked, handleClick, closeAll };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export const useUi = () => {
  const context = useContext(UiContext);
  if (context === undefined) {
    throw new Error("useUi must be used within a UIProvider");
  }
  return context;
}
