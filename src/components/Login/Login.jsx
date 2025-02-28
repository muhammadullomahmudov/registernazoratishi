import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        'https://nazorat-ishi-beckend-default-rtdb.firebaseio.com/users.json'
      );
      
      const users = response.data;
      let userFound = false;


      for (let userId in users) {
        const user = users[userId];
        
        if (user.username === username && user.password === password) {
          userFound = true;
          break;
        }
      }

      if (userFound) {
        navigate('/private');
      } else {
        console.log('Login yoki parol xato');
        alert('Login yoki parol xato');
      }

    } catch (error) {
      console.error('Xato yuz berdi:', error);
      alert('Xato yuz berdi:', error);
    }
  };

  return (
    <Container maxWidth="xs"> 
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>

      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '16px' }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
