import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Registration from "./pages/Registration";
import LastPage from "./pages/LastPage";
import Approval from "./pages/Approval";
import Scan from "./pages/Scan"
import Ticket from "./pages/Ticket"

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/regis" element={<Registration />} />
          <Route path="/lastpage" element={<LastPage />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
