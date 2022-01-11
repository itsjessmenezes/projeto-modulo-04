import './global.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kontacts from './Kontacts';
import { UserProviderContext } from './contexts/UserContext';

function App() {

  return (
    <UserProviderContext>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/kontacts" element={<Kontacts />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserProviderContext>
  );
}

export default App;
