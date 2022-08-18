import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Approval from './pages/Approval';
import Registration from './pages/Registration';
import Scan from './pages/Scan';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Ticket from './pages/Ticket';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Routes> */}
      <SignIn />
      {/* <SignUp /> */}
      {/* <Registration /> */}
      {/* <Approval /> */}
      {/* <Ticket /> */}
      {/* <Scan /> */}
    </>
  );
}

export default App;
