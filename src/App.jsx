import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
