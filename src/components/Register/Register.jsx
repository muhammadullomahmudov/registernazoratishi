import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material'; 
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://nazorat-ishi-beckend-default-rtdb.firebaseio.com/users.json', 
        {
          username: username,
          password: password,
        }
      );

      navigate('/login'); 
    } catch (error) {
      console.error("Xato: ", error);
    }
  };

  return (
    <Container maxWidth="xs"> 
      <Typography variant="h4" gutterBottom align="center">
        Register
      </Typography>

      <form onSubmit={handleRegister}>
        <TextField
          label="Username"
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
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
