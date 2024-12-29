import "./Timer.css";

function Timer() {
    return (
        <>
            <div className="timer-container">
                <div>Focus</div>
                <label className="time">00:00</label>
                <div className="btn-container">
                    <button id="play-btn">Play</button>
                    <button id="pause-btn">Pause</button>
                    <button id="skip-btn">Skip</button>
                </div>
            </div>
        </>
    );
}

export default Timer;
