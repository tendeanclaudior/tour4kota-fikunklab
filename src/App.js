import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Registration from "./pages/Registration";
import LastPage from "./pages/LastPage";
import Approval from "./pages/Approval";
import Scan from "./pages/Scan";
import Ticket from "./pages/Ticket";
import Admin from "./pages/Admin";
import Manado from "./pages/City/Manado";
import Gorontalo from "./pages/City/Gorontalo";
import Bitung from "./pages/City/Bitung";
import Kotamobagu from "./pages/City/Kotamobagu";
import ForgetPass from "./pages/ForgetPass";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/regis"
            element={
              <ProtectedRoute>
                <Registration />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lastpage"
            element={
              <ProtectedRoute>
                <LastPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/approval"
            element={
              <ProtectedRoute>
                <Approval />
              </ProtectedRoute>
            }
          />
          <Route
            path="/scan"
            element={
              <ProtectedRoute>
                <Scan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ticket"
            element={
              <ProtectedRoute>
                <Ticket />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/forgetpass" element={<ForgetPass />} />

          <Route
            path="/manado"
            element={
              <ProtectedRoute>
                <Manado />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gorontalo"
            element={
              <ProtectedRoute>
                <Gorontalo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bitung"
            element={
              <ProtectedRoute>
                <Bitung />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kotamobagu"
            element={
              <ProtectedRoute>
                <Kotamobagu />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
