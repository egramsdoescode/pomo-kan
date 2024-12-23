import { useState } from "react";
import "./Timer.css";

function Timer() {
    let now = new Date();

    const [time, setTime] = useState(setTime);

    function handleTime() {
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const timeStr = `${minutes}:${seconds}`;
        setTime(timeStr);
    }

    return (
        <>
            <div className="timer-container">
                <div>Focus</div>
                <label className="time">{time}</label>
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
