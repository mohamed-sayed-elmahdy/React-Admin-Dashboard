import { BsLayoutSidebarInset } from "react-icons/bs";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Navbar() {
   const { isSidebarOpen, toggleSidebar, isSidebarMobileOpen, toggleMobileSidebar } = useSidebar();

  return (
    <nav className={`flex relative p-4 bg-(--background) text-(--text) space-x-4 w-full transition-all duration-300 ${isSidebarMobileOpen ? "shadow-none" : "custom-navbar-shadow"} `} style={{ zIndex: '1000' }}>
      <button className="hidden lg:block cursor-pointer" onClick={toggleSidebar}>
        < BsLayoutSidebarInset className={`${isSidebarOpen ? "visible" : "invisible" }`} />
      </button>
            <div className="lg:hidden  cursor-pointer w-full  flex items-center px-4 z-20">
        <button onClick={toggleMobileSidebar}>
          <BsLayoutSidebarInset className="w-4 h-4"  />
        </button>
      </div>
    </nav>
  );
}