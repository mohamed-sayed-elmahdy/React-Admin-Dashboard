import Tooltip from "@/components/Tooltip";
import { useUi } from "@/contexts/UIContext";

function NavButton({ title, popKey, icon, color, dotColor }) {

    const { handleClick } = useUi();

    return (

        <Tooltip content={title} position="bottom center">
            <button onClick={() => handleClick(popKey)} type="button" className='flex items-center justify-center relative cursor-pointer rounded-full'>
                {icon}
            </button>
        </Tooltip>

    )
}

export default NavButton;