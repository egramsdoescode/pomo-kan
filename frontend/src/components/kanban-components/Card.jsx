import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
import { useFocusMode } from "../../FocusModeContext";
import { PiNotePencilLight } from "react-icons/pi";
import clsx from "clsx";

const Card = ({ title, id, column, handleDragStart }) => {
    const { focusMode } = useFocusMode();
    const baseStyles =
        "flex justify-between cursor-grab rounded-xl border border-neutral-700 p-3 active:cursor-grabbing transition-colors duration-500 ease-in-out";
    const focusStyles = clsx(baseStyles, {
        "bg-[#f38ba8]": focusMode === "focus",
        "bg-[#cba6f7]": focusMode === "short-break",
        "bg-[#89b4fa]": focusMode === "long-break",
    });
    return (
        <>
            <DropIndicator beforeId={id} column={column} />
            <motion.div
                layout
                layoutId={id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { title, id, column })}
                className={focusStyles}
            >
                <p className="text-sm font-robo text-[#000]">{title}</p>
                <PiNotePencilLight className="opacity-0 hover:opacity-100 duration-200 ease-in-out text-xl cursor-pointer" />
            </motion.div>
        </>
    );
};

export default Card;
