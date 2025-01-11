import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const AddCard = ({ column, setCards }) => {
    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim().length) return;

        const newCard = {
            column,
            title: text.trim(),
            id: Math.random().toString(),
        };

        setCards((pv) => [...pv, newCard]);

        setAdding(false);
    };

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <>
            {adding ? (
                <motion.form id="taskForm" layout onSubmit={handleSubmit}>
                    <textarea
                        maxLength={26}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleEnterKey}
                        autoFocus
                        placeholder="Add new task..."
                        className="resize-none w-full rounded border border-black  p-3 text-sm text-[#000] bg-neutral-200 placeholder-neutral-600 focus:outline-none"
                    />
                    <div className="mt-1.5 flex items-center justify-end gap-1.5">
                        <motion.button
                            layout
                            onClick={() => setAdding(false)}
                            className="px-3 py-1.5 text-xs text-neutral-600 transition-colors hover:text-neutral-50"
                        >
                            Close
                        </motion.button>
                        <motion.button
                            layout
                            type="submit"
                            className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
                        >
                            <span>Add</span>
                            <FiPlus />
                        </motion.button>
                    </div>
                </motion.form>
            ) : (
                <button
                    onClick={() => setAdding(true)}
                    className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                >
                    <span>Add Card</span>
                    <FiPlus />
                </button>
            )}
        </>
    );
};

export default AddCard;
