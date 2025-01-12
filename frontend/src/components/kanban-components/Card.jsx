import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
import { useFocusMode } from "../../FocusModeContext";

const Card = ({ title, id, column, handleDragStart }) => {
    const { focusMode } = useFocusMode();
    return (
        <>
            <DropIndicator beforeId={id} column={column} />
            <motion.div
                layout
                layoutId={id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { title, id, column })}
                className={`cursor-grab rounded-xl border border-neutral-700 p-3 active:cursor-grabbing ${
                    focusMode === "focus"
                        ? "bg-[#f38ba8]"
                        : focusMode === "short-break"
                          ? "bg-[#cba6f7]"
                          : "bg-[#89b4fa]"
                } transition-colors duration-500 ease-in-out`}
            >
                <p className="text-sm font-robo text-[#000]">{title}</p>
            </motion.div>
        </>
    );
};

export default Card;
