import { Timer } from "./components";

function App() {
    return (
        <>
            {/* app container */}
            <div className="flex flex-col h-screen">
                {/* main container */}
                <div className="mt-[-60%] flex-1 flex justify-center items-center">
                    <Timer />
                </div>
            </div>
        </>
    );
}

export default App;
