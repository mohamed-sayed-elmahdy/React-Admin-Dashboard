import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function Card({ card, hoveredCardId, setHoveredCardId }) {
    return (
        <div
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData("cardId", card.id);
            }}
            onDragOver={(e) => {
                e.preventDefault();
                setHoveredCardId(card.id);
            }}
            className={`bg-white shadow-md p-3 rounded-md cursor-grab transition-all
            ${hoveredCardId === card.id ? "border-2 border-primary scale-[1.01]" : ""}
`}>
            <div className="  flex  justify-between">
                <div>
                    <h3 className="font-medium">{card.title}</h3>
                </div>
                <div className=" flex items-center gap-2">
                    <button className="text-2xl text-primary px-2 py-1 rounded-md cursor-pointer" type="button">
                        <CiEdit />
                    </button>
                    <button className="text-2xl text-primary px-2 py-1 rounded-md cursor-pointer" type="button">
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
            <p className="text-sm text-gray-600">{card.description}</p>
        </div>
    );
}

export default Card;