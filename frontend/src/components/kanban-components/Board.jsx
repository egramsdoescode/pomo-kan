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
        <div className="no-scrollbar flex justify-evenly h-full w-full gap-3 overflow-scroll p-6">
            <Column
                title="backlog"
                column="backlog"
                headingColor="#000"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="todo"
                column="todo"
                headingColor="#000"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="doing"
                column="doing"
                headingColor="#000"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="done"
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
