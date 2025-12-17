import { useEffect, useRef } from "react";
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
import NavPopups from "@/components/NavPopups";

// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import avatar from "../data/avatar.jpg";


import { BsLayoutSidebarInset } from "react-icons/bs";
import { useSidebar } from "@/contexts/SidebarContext";
import { useUi } from "@/contexts/UIContext";

export default function Navbar() {
  const { isSidebarOpen, toggleSidebar, isSidebarMobileOpen, toggleMobileSidebar } = useSidebar();
  const { closeAll } = useUi();
  const navRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        navRef.current?.contains(e.target) ||
        popupRef.current?.contains(e.target)
      ) {
        return;
      }

      closeAll();

    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeAll]);



  return (
    <nav className={`flex items-center justify-between relative px-2 py-3 md:p-4  bg-(--background) text-(--text) w-full transition-all duration-300 ${isSidebarMobileOpen ? "shadow-none" : "custom-navbar-shadow"} `} style={{ zIndex: '1000' }}>
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

      {/* nav items */}
      <div>
        <ul ref={navRef} className="flex items-center gap-6 pe-3">
          <NavButton title="Cart" popKey="cart" customFunc={cart} icon={<FiShoppingCart className="w-5 h-5" />} color="blue" dotColor="red" />
          <NavButton title="Notifications" popKey="notification" customFunc={notification} icon={<RiNotification3Line className="w-5 h-5" />} color="blue" dotColor="red" />
          <NavButton title="Chat" popKey="chat" customFunc={chat} icon={<BsChatLeft className="w-5 h-5" />} color="blue" dotColor="red" />
          <NavButton title="Profile" popKey="userProfile" customFunc={userProfile} icon={<MdKeyboardArrowDown className="w-5 h-5" />} color="blue" />
        </ul>
        <NavPopups popupRef={popupRef} />
      </div>
    </nav>
  );
}