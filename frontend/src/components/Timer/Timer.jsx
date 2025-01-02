import { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
    // Sounds for timer
    const notificationSound = new Audio("/sounds/alarm.mp3");
    const btnSound = new Audio("/sounds/button-click.mp3");

    // Labels for focus state
    const FocusState = {
        FOCUS: 0,
        SHORT: 1,
        LONG: 2,
    };

    // Cycle for a full pomodoro
    const cycle = [
        FocusState.FOCUS,
        FocusState.SHORT,
        FocusState.FOCUS,
        FocusState.SHORT,
        FocusState.FOCUS,
        FocusState.SHORT,
        FocusState.FOCUS,
        FocusState.SHORT,
        FocusState.LONG,
    ];
    const durations = {
        [FocusState.FOCUS]: 25 * 60, // 25 minutes
        [FocusState.SHORT]: 5 * 60, // 5 minutes
        [FocusState.LONG]: 15 * 60, // 15 minutes
    };

    const [position, setPosition] = useState(0);
    const [seconds, setSeconds] = useState(durations[FocusState.FOCUS]);
    const [isStarted, setIsStarted] = useState(false);
    const [btnText, setBtnText] = useState("START");
    const [focusMode, setFocusMode] = useState("Focus");

    const toggleTimer = () => {
        if (btnSound) btnSound.play();
        setIsStarted((prevStarted) => !prevStarted);
    };

    // Update the focus mode and reset the timer when the position changes
    useEffect(() => {
        const newFocus = cycle[position];
        setFocusMode(
            newFocus === FocusState.FOCUS
                ? "Focus"
                : newFocus === FocusState.SHORT
                  ? "Short Break"
                  : "Long Break",
        );
        setSeconds(durations[newFocus]);
    }, [position]);

    // Handle the timer logic
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
                    setIsStarted(false); // Stop the timer
                    setPosition(
                        (prevPosition) => (prevPosition + 1) % cycle.length,
                    ); // Move to the next focus mode
                    return 0; // Ensure timer reaches zero
                }
                return prevSeconds - 1;
            });
        }, 1000);

        // Cleanup interval on component unmount or when dependencies change
        return () => clearInterval(interval);
    }, [isStarted]);

    // Format minutes and seconds for the timer display
    const minutesRemaining = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
    const secondsRemaining = (seconds % 60).toString().padStart(2, "0");

    return (
        <>
            <div id="timer-container">
                <p id="focus-mode">{focusMode}</p>
                <label id="countdown">
                    {minutesRemaining}:{secondsRemaining}
                </label>
                <div id="btn-container">
                    <button
                        className="timer-btn"
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
                                (prevPosition) =>
                                    (prevPosition + 1) % cycle.length,
                            ); // Skip to the next mode
                            setIsStarted(false); // Pause the timer when skipping
                        }}
                    >
                        SKIP
                    </button>
                </div>
            </div>
        </>
    );
}

export default Timer;
