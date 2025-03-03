import { useFocusMode } from "../FocusModeContext";
import clsx from "clsx";
import { NavBar, Timer, KanBan } from "../components";

function Home() {
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
                <NavBar />
                {/* main container */}
                <div className="pt-8 flex-col flex-1 flex justify-center items-center">
                    <Timer />
                    <KanBan />
                </div>
            </div>
        </>
    );
}

export default Home;
