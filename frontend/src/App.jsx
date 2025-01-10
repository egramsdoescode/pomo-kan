import { KanBan, Timer } from "./components";

function App() {
    return (
        <>
            {/* app container */}
            <div className="flex h-screen">
                {/*<NavBar />*/}
                {/* main container */}
                <div className="pt-24 flex-col flex-1 flex justify-center items-center">
                    <Timer />
                    <KanBan />
                </div>
            </div>
        </>
    );
}

export default App;
