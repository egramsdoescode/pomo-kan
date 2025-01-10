import { Timer } from "./components";

function App() {
    return (
        <>
            {/* app container */}
            <div className="flex flex-col h-screen">
                {/*<NavBar />*/}
                {/* main container */}
                <div className="pt-24 flex-1 flex justify-center items-start">
                    <Timer />
                </div>
            </div>
        </>
    );
}

export default App;
