import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import cart from "@/components/Cart";
import notification from "@/components/Notification";
import chat from "@/components/Chat";
import userProfile from "@/components/UserProfile";
import NavButton from "@/components/NavButton";
import Tooltip from "@/components/Tooltip";

// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import avatar from "../data/avatar.jpg";


import { BsLayoutSidebarInset } from "react-icons/bs";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Navbar() {
  const { isSidebarOpen, toggleSidebar, isSidebarMobileOpen, toggleMobileSidebar } = useSidebar();

  return (
    <nav className={`flex items-center justify-between relative p-4 bg-(--background) text-(--text) space-x-4 w-full transition-all duration-300 ${isSidebarMobileOpen ? "shadow-none" : "custom-navbar-shadow"} `} style={{ zIndex: '1000' }}>
      <div>
        <button className="hidden lg:block cursor-pointer" onClick={toggleSidebar}>
          < BsLayoutSidebarInset className={`${isSidebarOpen ? "visible" : "invisible"}`} />
        </button>
        <div className="lg:hidden  cursor-pointer w-full  flex items-center px-4 z-20">
          <button onClick={toggleMobileSidebar}>
            <BsLayoutSidebarInset className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div>
        {/* nav items */}
        <ul className="flex items-center gap-6 pe-3">
          <NavButton title="Cart" customFunc={cart} icon={<FiShoppingCart />} color="blue" dotColor="red" />
          <NavButton title="Notifications" customFunc={notification} icon={<RiNotification3Line />} color="blue" dotColor="red" />
          <NavButton title="Chat" customFunc={chat} icon={<BsChatLeft />} color="blue" dotColor="red" />
          <NavButton title="Profile" customFunc={userProfile} icon={<MdKeyboardArrowDown />} color="blue" />
        </ul>
      </div>
    </nav>
  );
}