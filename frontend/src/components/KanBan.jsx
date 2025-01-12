import Board from "./kanban-components/Board";

function KanBan() {
    return (
        <div className="inline-block border rounded-3xl bg-[#f5c2e7] font-robo shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
            <Board />
        </div>
    );
}

export default KanBan;
