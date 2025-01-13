import { useFocusMode } from "../FocusModeContext";
import Board from "./kanban-components/Board";
import clsx from "clsx";

function KanBan() {
    const { focusMode } = useFocusMode();
    const baseStyles =
        "inline-block border rounded-3xl font-robo shadow-[0_2px_5px_rgba(0,0,0,0.8)]";
    const focusStyles = clsx(baseStyles, {
        "bg-[#f5c2e7]": focusMode === "focus",
        "bg-[#ddc0fc]": focusMode === "short-break",
        "bg-[#dadfef]": focusMode === "long-break",
    });
    return (
        <div className={focusStyles}>
            <Board />
        </div>
    );
}

export default KanBan;
