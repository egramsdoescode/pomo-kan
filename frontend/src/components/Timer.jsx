import { useState, useEffect } from "react";
import classNames from "classnames";

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
        [FocusState.FOCUS]: 25 * 60, // 25 minutes
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
        const newFocus = cycle[position];

        const mode =
            newFocus === FocusState.FOCUS
                ? "focus"
                : newFocus === FocusState.SHORT
                  ? "short-break"
                  : "long-break";

        setFocusMode(mode);
        setSeconds(durations[newFocus]);
    }, [position]);

    useEffect(() => {
        // Update body class when focusMode changes
        document.body.className = ""; // Clear existing classes
        document.body.classList.add(focusMode);
    }, [focusMode]);

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

    // Update start button classes
    const startBtnClasses = classNames(
        `text-[25px] border-none h-[46px] w-[122px] 
         rounded-[24px] font-bold shadow-[0_1px_5px] 
         active:shadow-custom-inner 
         transition-colors duration-500 ease-in-out`,
        {
            "bg-[#f38ba8]": focusMode === "focus",
            "bg-[#cba6f7]": focusMode === "short-break",
            "bg-[#89b4fa]": focusMode === "long-break",
        },
    );

    // Update timer container classes
    const timerContainerClasses = classNames(
        `mt-[-40%] w-[480px] h-[313px] border rounded-3xl 
         flex flex-col justify-evenly items-center 
         shadow-[0_2px_5px] transition-colors duration-500 ease-in-out`,
        {
            "bg-[#f5c2e7]": focusMode === "focus",
            "bg-[#ddc0fc]": focusMode === "short-break",
            "bg-[#dadfef]": focusMode === "long-break",
        },
    );

    const skipButtonClasses = classNames(
        `text-[25px] border-none h-[46px] w-[122px]
         active:shadow-custom-inner 
         rounded-[24px] font-bold bg-[#a6adc8] shadow-[0_1px_5px]`,
    );

    return (
        <div className={timerContainerClasses}>
            <p className="font-robo p-0 m-0 text-[30px] font-bold">
                {focusMode}
            </p>
            <label className="font-robo text-[100px] font-[100] mt-[-10px]">
                {minutesRemaining}:{secondsRemaining}
            </label>
            <div className="font-robo flex justify-between w-[65%]">
                <button className={startBtnClasses} onClick={toggleTimer}>
                    {btnText}
                </button>
                <button
                    className={skipButtonClasses}
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
