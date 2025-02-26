// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Link import qilish
import Register from './components/Register/Register'; 
import Login from './components/Login/Login'; 
import PrivatePage from './components/PrivatePage/PrivatePage';

const App = () => {
  return (
    <Router>
      <div>

        <nav style={{gap: 40}}>
          <Link to="/register">Register</Link>| 
          <Link to="/login">Login</Link> 
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricate" element={<PrivatePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
