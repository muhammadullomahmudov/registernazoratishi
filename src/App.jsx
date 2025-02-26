
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './pages/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivatePage from './components/PrivatePage/PrivatePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/private",
    element: <PrivatePage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} /> 
  );
};

export default App;
