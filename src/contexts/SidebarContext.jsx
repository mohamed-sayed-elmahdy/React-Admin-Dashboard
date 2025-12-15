import { createContext, useContext, useState, useCallback, useMemo } from "react";

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
  const closeMobileSidebar = useCallback(() => {
    setIsSidebarMobileOpen(false);
  }, []);

 const value = useMemo(
    () => ({
      isSidebarOpen,
      isSidebarMobileOpen,
      toggleSidebar,
      toggleMobileSidebar,
      closeMobileSidebar,
    }),
    [isSidebarOpen, isSidebarMobileOpen, toggleSidebar, toggleMobileSidebar, closeMobileSidebar]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export const useSidebar = () => {
  const sidebarContext = useContext(SidebarContext);
  if (sidebarContext === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return sidebarContext;
};
