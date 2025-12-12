import { createContext, useContext, useState, useCallback } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);
  const toggleMobileSidebar = useCallback(() => {
    setIsSidebarMobileOpen((prev) => !prev);
  }, []);


  const value = {
    isSidebarOpen,
    isSidebarMobileOpen,
    toggleSidebar, 
    toggleMobileSidebar,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export const useSidebar = () => useContext(SidebarContext);
