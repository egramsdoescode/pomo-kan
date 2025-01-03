import { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
    const notificationSound = new Audio("/sounds/alarm.mp3");
    const btnSound = new Audio("/sounds/button-click.mp3");

    const FocusState = {
        FOCUS: 0,
        SHORT: 1,
        LONG: 2,
    };

    const cycle = [
        FocusState.FOCUS,
        FocusState.SHORT,
        FocusState.FOCUS,
        FocusState.SHORT,
        FocusState.FOCUS,
        FocusState.SHORT,
        FocusState.FOCUS,
        FocusState.LONG,
    ];

    const durations = {
        [FocusState.FOCUS]: 30 * 60, // 25 minutes
        [FocusState.SHORT]: 5 * 60, // 5 minutes
        [FocusState.LONG]: 30 * 60, // 30 minutes
    };

    const [position, setPosition] = useState(0);
    const [seconds, setSeconds] = useState(durations[FocusState.FOCUS]);
    const [isStarted, setIsStarted] = useState(false);
    const [btnText, setBtnText] = useState("START");
    const [focusMode, setFocusMode] = useState("focus");

    const toggleTimer = () => {
        if (btnSound) btnSound.play();
        setIsStarted((prevStarted) => !prevStarted);
    };

    useEffect(() => {
        const body = document.body;

        // Remove all previous classes
        body.classList.remove("focus", "short-break", "long-break");

        const newFocus = cycle[position];

        // Determine the new focus mode
        const mode =
            newFocus === FocusState.FOCUS
                ? "focus"
                : newFocus === FocusState.SHORT
                  ? "short-break"
                  : "long-break";

        setFocusMode(mode);
        body.classList.add(mode); // Add valid class name
        setSeconds(durations[newFocus]);
    }, [position]);

    useEffect(() => {
        if (!isStarted) {
            setBtnText("START");
            return;
        }

        setBtnText("PAUSE");
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds <= 1) {
                    if (notificationSound) notificationSound.play();
                    clearInterval(interval);
                    setIsStarted(false);
                    setPosition(
                        (prevPosition) => (prevPosition + 1) % cycle.length,
                    );
                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isStarted]);

    const minutesRemaining = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
    const secondsRemaining = (seconds % 60).toString().padStart(2, "0");

    return (
        <div id="timer-container" className={focusMode}>
            <p id="focus-mode">{focusMode.replace("-", " ")}</p>
            <label id="countdown">
                {minutesRemaining}:{secondsRemaining}
            </label>
            <div id="btn-container">
                <button
                    className={`timer-btn ${focusMode}`}
                    id="play-btn"
                    onClick={toggleTimer}
                >
                    {btnText}
                </button>
                <button
                    className="timer-btn"
                    id="skip-btn"
                    onClick={() => {
                        if (btnSound) btnSound.play();
                        setPosition(
                            (prevPosition) => (prevPosition + 1) % cycle.length,
                        );
                        setIsStarted(false);
                    }}
                >
                    SKIP
                </button>
            </div>
        </div>
    );
}

export default Timer;
