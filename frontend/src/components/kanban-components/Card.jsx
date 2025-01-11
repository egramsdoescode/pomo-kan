import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";

const Card = ({ title, id, column, handleDragStart }) => {
    return (
        <>
            <DropIndicator beforeId={id} column={column} />
            <motion.div
                layout
                layoutId={id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { title, id, column })}
                className="cursor-grab rounded-xl border border-neutral-700 bg-[#f38ba8]  p-3 active:cursor-grabbing"
            >
                <p className="text-sm font-robo text-[#000]">{title}</p>
            </motion.div>
        </>
    );
};

export default Card;
