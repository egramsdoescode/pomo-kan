import { KanBan, Timer } from "./components";
import { FocusModeProvider, useFocusMode } from "./FocusModeContext";

function AppContainer() {
    const { focusMode } = useFocusMode();
    return (
        <>
            {/* app container */}
            <div
                className={`flex h-screen ${
                    focusMode === "focus"
                        ? "bg-[#f38ba8]"
                        : focusMode === "short-break"
                          ? "bg-[#cba6f7]"
                          : "bg-[#89b4fa]"
                } transition-colors duration-500 ease-in-out`}
            >
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
