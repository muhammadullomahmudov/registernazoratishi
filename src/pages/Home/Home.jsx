
import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Box } from '@mui/material'; 

const Home = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
      }}
    >
      <Button 
        component={Link} 
        to="/register" 
        variant="outlined" 
        sx={{
          marginBottom: '10px',
          width: '200px',
          backgroundColor: '#ffffff',
          '&:hover': {
            backgroundColor: '#f4f4f4',
          },
        }}
      >
        Register
      </Button>

      <Button 
        component={Link} 
        to="/login" 
        variant="outlined" 
        sx={{
          marginBottom: '10px',
          width: '200px',
          backgroundColor: '#ffffff',
          '&:hover': {
            backgroundColor: '#f4f4f4',
          },
        }}
      >
        Login
      </Button>

    </Box>
  );
};

export default Home;
