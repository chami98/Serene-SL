import logo from './logo.svg';
import './App.css';
import SignInSide from './pages/SignInSide'
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/signin"
            element={<SignInSide />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
