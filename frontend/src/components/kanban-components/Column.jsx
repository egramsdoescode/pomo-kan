import { useState } from "react";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import AddCard from "./AddCard";

const Column = ({ title, headingColor, column, cards, setCards }) => {
    const [active, setActive] = useState(false);

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        highlightIndicator(e);
        setActive(true);
    };

    const highlightIndicator = (e) => {
        const indicators = getIndicators();
        clearHighlights(indicators);
        const el = getNearestIndicator(e, indicators);
        el.element.style.opacity = "1";
    };

    const clearHighlights = (els) => {
        const indicators = els || getIndicators();
        indicators.forEach((i) => {
            i.style.opacity = "0";
        });
    };

    const getIndicators = () => {
        return Array.from(
            document.querySelectorAll(`[data-column="${column}"]`),
        );
    };

    const getNearestIndicator = (e, indicators) => {
        const DISTANCE_OFFSET = 50;
        const el = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = e.clientY - (box.top + DISTANCE_OFFSET);
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            },
        );

        return el;
    };

    const handleDragLeave = () => {
        setActive(false);
        clearHighlights();
    };

    const handleDragEnd = (e) => {
        setActive(false);
        clearHighlights();

        const cardId = e.dataTransfer.getData("cardId");
        const indicators = getIndicators();
        const { element } = getNearestIndicator(e, indicators);

        const before = element.dataset.before || "-1";

        if (before !== cardId) {
            let copy = [...cards];

            let cardToTransfer = copy.find((c) => c.id === cardId);

            if (!cardToTransfer) return;

            cardToTransfer = { ...cardToTransfer, column };

            copy = copy.filter((c) => c.id !== cardId);

            const moveToBack = before === "-1";
            if (moveToBack) {
                copy.push(cardToTransfer);
            } else {
                const insertAtIndex = copy.findIndex((el) => el.id === before);
                if (insertAtIndex === undefined) return;

                copy.splice(insertAtIndex, 0, cardToTransfer);
            }

            setCards(copy);
        }
    };

    const filteredCards = cards.filter((c) => c.column === column);
    return (
        <div className="px-2 w-56 shrink-0 border-l border-r border-neutral-400">
            <div className="mb-3 flex items-center justify-center">
                <h3 className={`font-bold font-robo ${headingColor}`}>
                    {title}
                </h3>
            </div>
            <div
                onDrop={handleDragEnd}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                className={`h-full w-full`}
            >
                {filteredCards.map((c) => {
                    return (
                        <Card
                            key={c.id}
                            {...c}
                            handleDragStart={handleDragStart}
                        />
                    );
                })}
                <DropIndicator beforeId="-1" column={column} />
                <AddCard column={column} setCards={setCards} />
            </div>
        </div>
    );
};

export default Column;
