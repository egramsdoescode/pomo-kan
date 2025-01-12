import { useFocusMode } from "../FocusModeContext";
import Board from "./kanban-components/Board";

function KanBan() {
    const { focusMode } = useFocusMode();
    return (
        <div
            className={`inline-block border rounded-3xl font-robo shadow-[0_2px_5px_rgba(0,0,0,0.8)] ${
                focusMode === "focus"
                    ? "bg-[#f5c2e7]"
                    : focusMode === "short-break"
                      ? "bg-[#ddc0fc]"
                      : "bg-[#dadfef]"
            }`}
        >
            <Board />
        </div>
    );
}

export default KanBan;
