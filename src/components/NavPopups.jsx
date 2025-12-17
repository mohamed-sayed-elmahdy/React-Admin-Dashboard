import Cart from "@/components/Cart";
import Notification from "@/components/Notification";
import Chat from "@/components/Chat";
import UserProfile from "@/components/UserProfile";
import { useUi } from "@/contexts/UIContext";

export default function NavPopups({ popupRef }) {
  const { isClicked } = useUi();
  if (!Object.values(isClicked).some(Boolean)) return null;

  return (
    <div ref={popupRef}>
      {isClicked.cart && <Cart />}
      {isClicked.notification && <Notification />}
      {isClicked.chat && <Chat />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
}