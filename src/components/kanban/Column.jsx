import Card from "@/components/kanban/Card";
function Column({ column, onDropCard,hoveredCardId,  setHoveredCardId }) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const cardId = e.dataTransfer.getData("cardId");
        onDropCard(cardId, column.id);
      }}
      className="bg-white w-full p-2 rounded-md shadow  min-h-[200px]">
      <h3 className="font-medium">{column.title}</h3>
      <div className="mt-2 flex flex-col gap-4">
        {column.cards.map((card) => (
          <Card 
          key={card.id} 
          card={card}
          setHoveredCardId={setHoveredCardId}
          hoveredCardId={hoveredCardId}
          />
        ))}
      </div>
    </div>
  );
}

export default Column