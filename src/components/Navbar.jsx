import { useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import NavButton from "@/components/NavButton";
import NavPopups from "@/components/NavPopups";
import Tooltip from "@/components/Tooltip";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import avatar from "../data/avatar.jpg";


import { BsLayoutSidebarInset } from "react-icons/bs";
import { useSidebar } from "@/contexts/SidebarContext";
import { useUi } from "@/contexts/UIContext";
import myimage from "@/assets/mypic.jpg";

export default function Navbar() {
  const { isSidebarOpen, toggleSidebar, isSidebarMobileOpen, toggleMobileSidebar } = useSidebar();
  const { handleClick, closeAll } = useUi();
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
          < BsLayoutSidebarInset className={`${isSidebarOpen ? "visible" : "invisible"} w-4 h-4`} />
        </button>
        <div className="lg:hidden  cursor-pointer w-full  flex items-center px-4 z-20">
          <button onClick={toggleMobileSidebar}>
            <BsLayoutSidebarInset className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* nav items */}
      <div>
        <ul ref={navRef} className="flex items-center gap-5 md:gap-6 pe-3">
          <NavButton title="Cart" popKey="cart" icon={<FiShoppingCart className="w-4 h-4 md:w-5 md:h-5" />} color="blue" dotColor="red" />
          <NavButton title="Notifications" popKey="notification" icon={<RiNotification3Line className="w-5 h-5" />} color="blue" dotColor="red" />
          <NavButton title="Chat" popKey="chat" icon={<BsChatLeft className="w-4 h-4 md:w-5 md:h-5" />} color="blue" dotColor="red" />
          <Tooltip content="Profile" position="bottom center">
            <button onClick={() => handleClick("userProfile")} type="button" className='flex items-center gap-2 justify-center cursor-pointer text-xl rounded-full relative'>
                <img src={myimage} alt=" profile" className="rounded-full w-4 h-4  md:w-6 md:h-6" />
               <div className="flex items-center gap-0">
                 <span className="text-[12px] hidden md:block font-extralight">Mohamed S.</span>
                <MdKeyboardArrowDown className="w-5 h-5 text-(--text) font-bold" />
               </div>
            </button>
          </Tooltip>        </ul>
        <NavPopups popupRef={popupRef} />
      </div>
    </nav>
  );
}