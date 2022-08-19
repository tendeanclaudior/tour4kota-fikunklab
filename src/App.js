import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/regis" element={<Registration />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
