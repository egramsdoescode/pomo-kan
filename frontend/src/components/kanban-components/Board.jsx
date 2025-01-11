import { useEffect, useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";

const Board = () => {
    const [cards, setCards] = useState([]);
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        const cardData = localStorage.getItem("cards");
        setCards(cardData ? JSON.parse(cardData) : []);
        setHasChecked(true);
    }, []);

    return (
        <div className="flex justify-around h-full w-full gap-3 overflow-scroll p-6">
            <Column
                title="Backlog"
                column="backlog"
                headingColor="#000"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="TODO"
                column="todo"
                headingColor="#000"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="In Progress"
                column="doing"
                headingColor="#000"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Complete"
                column="done"
                headingColor="#000"
                cards={cards}
                setCards={setCards}
            />
            <BurnBarrel setCards={setCards} />
        </div>
    );
};

export default Board;
