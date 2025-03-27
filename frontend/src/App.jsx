import { FocusModeProvider } from "./FocusModeContext";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";

// TODO: put these routes back in after implementing them
// <Route path="login" element={<Login />} />
// <Route path="signup" element={<SignUp />} />

function App() {
    return (
        <FocusModeProvider>
            <Routes>
                <Route index element={<Home />}></Route>
            </Routes>
        </FocusModeProvider>
    );
}

export default App;
