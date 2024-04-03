import logo from './logo.svg';
import './App.css';
import SignInSide from './pages/SignInSide'
import TouristDashboard from './pages/TouristDashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import HospitalDashboard from './pages/HospitalDashboard';
import { useEffect } from 'react';


function App() {

  const [authenticated, setAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [accountType, setAccountType] = useState('');

  useEffect(() => {
    const storedAccountType = localStorage.getItem('accountType');
    if (storedAccountType) {
      setAccountType(storedAccountType);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              authenticated ?
                (accountType === 'tourist' ? <TouristDashboard /> : (accountType === 'hospital' ? <HospitalDashboard /> : <Navigate to="/signin" />))
                : <Navigate to="/signin" />
            }
          />
          <Route
            path="/signin"
            element={!authenticated ? <SignInSide setAuthenticated={setAuthenticated} setAccountType={setAccountType} /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
