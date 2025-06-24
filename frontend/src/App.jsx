import { FocusModeProvider } from "./FocusModeContext";
import { Home, Login, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <FocusModeProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </FocusModeProvider>
  );
}

export default App;
