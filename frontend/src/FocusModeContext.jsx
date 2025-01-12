import { createContext, useContext, useState } from "react";

const FocusModeContext = createContext();

export const FocusModeProvider = ({ children }) => {
    const [focusMode, setFocus] = useState("focus");

    return (
        <FocusModeContext.Provider value={{ focusMode, setFocus }}>
            {children}
        </FocusModeContext.Provider>
    );
};

export const useFocusMode = () => useContext(FocusModeContext);
