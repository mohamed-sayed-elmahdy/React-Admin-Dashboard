import { createContext, useContext, useState, useCallback } from "react";

const ClickContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function ClickProvider({ children }) {
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = useCallback((key) => {
    setIsClicked({ ...initialState, [key]: true });
  }, []);

  const closeAll = useCallback(() => {
    setIsClicked(initialState);
  }, []);

  const value = { isClicked, handleClick, closeAll };

  return <ClickContext.Provider value={value}>{children}</ClickContext.Provider>;
}

export const useClick = () => useContext(ClickContext);
