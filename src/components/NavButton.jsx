import Tooltip from "@/components/Tooltip";
import { FiShoppingCart } from "react-icons/fi";

function NavButton({title, customFunc, icon, color, dotColor}) {
    return (
        
            <Tooltip content={title} position="bottom center">
                <button type="button" className='cursor-pointer text-xl rounded-full relative'>
                 {icon}
                 {dotColor && <span className="absolute top-[-2.5px] right-0 rounded-full w-2 h-2" style={{ background: "var(--primary)" }} />}
                </button>
            </Tooltip>

    )
}

export default NavButton;