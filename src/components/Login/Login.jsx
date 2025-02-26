// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    const url = 'https://nazorat-ishi-beckend-default-rtdb.firebaseio.com/users/-OK0fkbpVyzvqAyWiSAR.json';

    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.username === username && data.password === password) {

        navigate('/private');
      } else {
        console.log('Login yoki parol xato');
      }
    } catch (error) {
      console.error('Xato yuz berdi:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
