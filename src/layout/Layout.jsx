import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

function Layout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#FAFAFA',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          py: 4,
          px: 2,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
