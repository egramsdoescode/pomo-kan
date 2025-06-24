import react from "react";

const FocusModeContext = react.createContext();

export const FocusModeProvider = ({ children }) => {
  const [focusMode, setFocus] = react.useState("focus");

  return (
    <FocusModeContext.Provider value={{ focusMode, setFocus }}>
      {children}
    </FocusModeContext.Provider>
  );
};

export const useFocusMode = () => react.useContext(FocusModeContext);
