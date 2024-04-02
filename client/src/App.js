import logo from './logo.svg';
import './App.css';
import SignInSide from './pages/SignInSide'
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


function App() {

  const [authenticated, setAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={authenticated ? <Dashboard /> : <Navigate to="/signin" />}
          />
          <Route
            path="/signin"
            element={!authenticated ? <SignInSide setAuthenticated={setAuthenticated} /> : <Navigate to="/" />}
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
