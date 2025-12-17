import Tooltip from "@/components/Tooltip";
import { useUi } from "@/contexts/UIContext";

function NavButton({ title, popKey, icon, color, dotColor }) {

    const { handleClick } = useUi();

    return (

        <Tooltip content={title} position="bottom center">
            <button onClick={() => handleClick(popKey)} type="button" className='cursor-pointer text-xl rounded-full relative'>
                {icon}
                {dotColor && <span className="absolute top-[-2.5px] right-0 rounded-full w-2 h-2" style={{ background: "var(--primary)" }} />}
            </button>
        </Tooltip>

    )
}

export default NavButton;