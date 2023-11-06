import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { toggleDarkMode, initializeDarkMode } from './components/DarkMode.js';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Help from './pages/Help/Help.jsx';
import './main.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => { initializeDarkMode(); }, []);

  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
      </div>

      <Routes>
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/" // home
          element={loggedInUser ? (
              <Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            ) : (<Navigate to="/login" />)
          }
        />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;