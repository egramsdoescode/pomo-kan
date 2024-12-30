import "./Timer.css";

function Timer() {
    return (
        <>
            <div id="timer-container">
                <p id="focus-mode">Focus</p>
                <label id="countdown">25:00</label>
                <div id="btn-container">
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
