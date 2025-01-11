import { useState } from "react";
function KanBan() {
    return (
        <div className="h-[480px] w-full border border-black text-neutral-50 bg-neutral-900">
            <Board />
        </div>
    );
}

const Board = () => {
    const [cards, setCards] = useState([]);
    return (
        <div className="flex h-full w-full gap-3 overflow-scroll p-12">
            <Column
                title="Backlog"
                column="backlog"
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="TODO"
                column="todo"
                headingColor="text-yellow-200"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="In Progress"
                column="doing"
                headingColor="text-blue-200"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Complete"
                column="done"
                headingColor="text-emerald-200"
                cards={cards}
                setCards={setCards}
            />
        </div>
    );
};

const Column = ({ title, headingColor, column, cards, setCards }) => {
    const [active, setActive] = useState(false);
    return (
        <div className="w-56 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`font-medium ${headingColor}`}>{title}</h3>
                <span className="rounded text-sm text-neutral-400">
                    {cards.length}
                </span>
            </div>
            <div
                className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
            ></div>
        </div>
    );
};

export default KanBan;
