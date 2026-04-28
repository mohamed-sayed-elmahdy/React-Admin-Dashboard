import React, { useState } from "react";
import initialData from "@/data/kanbanData";
import Column from "@/components/kanban/Column";

function KanbanBoard() {
  const [data, setData] = useState(initialData);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const handleDrop = (cardId, targetColumnId) => {
    let movedCard = null;
    let sourceColumnId = null;

    for (const colId in data.columns) {
      const column = data.columns[colId];

      const found = column.cards.find(c => c.id === cardId);

      if (found) {
        movedCard = found;
        sourceColumnId = colId;
        break;
      }
    }

    // 🟣 Reorder
    if (sourceColumnId === targetColumnId) {
      if (!hoveredCardId) {
        setHoveredCardId(null);
        return;
      }

      const column = data.columns[sourceColumnId];
      const fromIndex = column.cards.findIndex(c => c.id === cardId);
      const toIndex = column.cards.findIndex(c => c.id === hoveredCardId);

      if (fromIndex === toIndex) {
        setHoveredCardId(null);
        return;
      };

      const newCards = [...column.cards];
      const [reorderedCard] = newCards.splice(fromIndex, 1);
      newCards.splice(toIndex, 0, reorderedCard);

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [sourceColumnId]: {
            ...column,
            cards: newCards,
          },
        },
      };

      setData(newData);
      setHoveredCardId(null);
      return;
    }

    // 🟢 Move
    if (!movedCard) return;

    const newData = {
      ...data,
      columns: {
        ...data.columns,

        [sourceColumnId]: {
          ...data.columns[sourceColumnId],
          cards: data.columns[sourceColumnId].cards.filter(
            c => c.id !== cardId
          ),
        },

        [targetColumnId]: {
          ...data.columns[targetColumnId],
          cards: [
            ...data.columns[targetColumnId].cards,
            movedCard,
          ],
        },
      },
    };

    setData(newData);
    setHoveredCardId(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 overflow-x-auto ps-0 p-4">
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        return (
          <Column
            key={column.id}
            column={column}
            onDropCard={handleDrop}
            setHoveredCardId={setHoveredCardId}
            hoveredCardId={
              hoveredCardId
            }
          />
        );
      })}
    </div>
  );
}

export default KanbanBoard;