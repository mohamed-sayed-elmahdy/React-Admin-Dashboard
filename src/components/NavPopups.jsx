import Cart from "@/components/Cart";
import Notification from "@/components/Notification";
import Chat from "@/components/Chat";
import UserProfile from "@/components/UserProfile";
import { useUi } from "@/contexts/UIContext";

export default function NavPopups({ popupRef, className = "" }) {
  const { activePopup } = useUi();
  if (!activePopup) return null;

    const MAP = {
    cart: <Cart />,
    chat: <Chat  />,
    notification: <Notification/>,
    userProfile: <UserProfile/>,
  };

  return (
    <div ref={popupRef} className={`
        absolute right-4 top-0 z-40
        origin-top-right
        scale-95 opacity-0
        animate-popup
        animate-slide-in-left
        ${className}
      `} >
      {MAP[activePopup]}
    </div>
  );
}