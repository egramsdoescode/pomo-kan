import "./Timer.css";

function Timer() {
    return (
        <>
            <div className="timer-container">
                <div id="focus-mode">Focus</div>
                <label className="time">25:00</label>
                <div className="btn-container">
                    <button className="timer-btn" id="play-btn">
                        START
                    </button>
                    <button className="timer-btn" id="skip-btn">
                        SKIP
                    </button>
                </div>
            </div>
        </>
    );
}

export default Timer;
