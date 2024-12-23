import "./Timer.css";

function Timer() {
    return (
        <>
            <div className="timer-container">
                <div>Focus</div>
                <div className="time">00:00</div>
                <div className="btn-container">
                    <button>Play</button>
                    <button>Pause</button>
                    <button>Skip</button>
                </div>
            </div>
        </>
    );
}

export default Timer;
