import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  SentimentVeryDissatisfied,
  Home,
  ArrowBack,
} from '@mui/icons-material';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}22 10%, transparent 10%)`,
          backgroundSize: '20px 20px',
          animation: 'rotate 60s linear infinite',
          opacity: 0.5,
        },
        '@keyframes rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      })}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={(theme) => ({
            textAlign: 'center',
            py: 6,
            px: 4,
            borderRadius: 4,
            background: theme.palette.background.paper,
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeInUp 0.8s ease-out',
            '@keyframes fadeInUp': {
              '0%': {
                opacity: 0,
                transform: 'translateY(40px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          })}
        >
          <Box
            sx={{
              position: 'relative',
              mb: 4,
            }}
          >
            <SentimentVeryDissatisfied
              sx={(theme) => ({
                fontSize: 120,
                color: theme.palette.error.main,
                animation: 'bounce 2s ease infinite',
                '@keyframes bounce': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(-20px)',
                  },
                },
              })}
            />
            <Typography
              variant="h1"
              sx={(theme) => ({
                fontSize: '8rem',
                fontWeight: 900,
                background: `linear-gradient(45deg, ${theme.palette.error.main}, ${theme.palette.error.light})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                mb: 2,
                animation: 'glitch 1s ease-in-out infinite alternate',
                '@keyframes glitch': {
                  '0%': {
                    textShadow: `2px 2px 0px ${theme.palette.error.light}`,
                  },
                  '100%': {
                    textShadow: `-2px -2px 0px ${theme.palette.error.dark}`,
                  },
                },
              })}
            >
              404
            </Typography>
          </Box>

          <Typography
            variant="h5"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
              mb: 4,
              fontWeight: 500,
              animation: 'fadeIn 1s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            })}
          >
            Oops! Looks like you've ventured into the unknown
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate(-1)}
              startIcon={<ArrowBack />}
              sx={(theme) => ({
                px: 3,
                py: 1.5,
                borderRadius: 2,
                backgroundColor: theme.palette.grey[800],
                '&:hover': {
                  backgroundColor: theme.palette.grey[900],
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              })}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              startIcon={<Home />}
              sx={(theme) => ({
                px: 3,
                py: 1.5,
                borderRadius: 2,
                background: theme.palette.background.buttonGradient,
                '&:hover': {
                  background: theme.palette.background.buttonHoverGradient,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              })}
            >
              Home Page
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
