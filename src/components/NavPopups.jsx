import Cart from "@/components/Cart";
import Notification from "@/components/Notification";
import Chat from "@/components/Chat";
import UserProfile from "@/components/UserProfile";
import { useUi } from "@/contexts/UIContext";

export default function NavPopups({ popupRef, className = "" }) {
  const { isClicked } = useUi();
  if (!Object.values(isClicked).some(Boolean)) return null;

  return (
    <div ref={popupRef} className={`
        absolute right-4 top-0 z-40
        origin-top-right
        scale-95 opacity-0
        animate-popup
        animate-slide-in-left
        ${className}
      `} >
      {isClicked.cart && <Cart />}
      {isClicked.notification && <Notification />}
      {isClicked.chat && <Chat />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
}