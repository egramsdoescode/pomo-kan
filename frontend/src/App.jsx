import { KanBan, Timer } from "./components";
import { FocusModeProvider, useFocusMode } from "./FocusModeContext";
import clsx from "clsx";

function AppContainer() {
    const { focusMode } = useFocusMode();
    const baseStyles =
        "flex h-screen transition-colors duration-500 ease-in-out";
    const focusStyles = clsx(baseStyles, {
        "bg-[#f38ba8]": focusMode === "focus",
        "bg-[#cba6f7]": focusMode === "short-break",
        "bg-[#89b4fa]": focusMode === "long-break",
    });
    return (
        <>
            {/* app container */}
            <div className={focusStyles}>
                {/* main container */}
                <div className="pt-8 flex-col flex-1 flex justify-center items-center">
                    <Timer />
                    <KanBan />
                </div>
            </div>
        </>
    );
}

function App() {
    return (
        <FocusModeProvider>
            <AppContainer />
        </FocusModeProvider>
    );
}

export default App;
