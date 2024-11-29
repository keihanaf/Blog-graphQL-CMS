import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(90deg, #1A237E 0%, #534bae 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flex: 1,
              gap: 2,
            }}
          >
            <BookIcon
              sx={{
                color: '#fff',
                fontSize: 35,
              }}
            />
            <Typography
              variant="h5"
              component="h1"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                letterSpacing: 1,
              }}
            >
              BLOGIFY
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
