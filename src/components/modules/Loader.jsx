import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

function Loader() {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        background: theme.palette.background.gradient,
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      })}
    >
      <Box
        sx={(theme) => ({
          position: 'relative',
          display: 'inline-flex',
          animation: 'pulse 1.5s ease-in-out infinite',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(1)',
            },
            '50%': {
              transform: 'scale(1.05)',
            },
            '100%': {
              transform: 'scale(1)',
            },
          },
        })}
      >
        <CircularProgress
          size={80}
          thickness={4}
          sx={(theme) => ({
            color: theme.palette.primary.main,
            animation: 'rotate 2s linear infinite',
            '@keyframes rotate': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            },
          })}
        />
        <CircularProgress
          size={80}
          thickness={4}
          sx={(theme) => ({
            color: theme.palette.secondary.main,
            position: 'absolute',
            left: 0,
            opacity: 0.4,
            animation: 'rotateReverse 3s linear infinite',
            '@keyframes rotateReverse': {
              '0%': {
                transform: 'rotate(360deg)',
              },
              '100%': {
                transform: 'rotate(0deg)',
              },
            },
          })}
        />
      </Box>
      <Typography
        variant="h6"
        sx={(theme) => ({
          color: theme.palette.primary.main,
          fontWeight: 500,
          opacity: 0.9,
          animation: 'slideUp 0.5s ease-out',
          '@keyframes slideUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: 0.9,
              transform: 'translateY(0)',
            },
          },
        })}
      >
        Loading...
      </Typography>
      <Box
        sx={(theme) => ({
          display: 'flex',
          gap: 0.8,
          mt: 1,
        })}
      >
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={(theme) => ({
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: theme.palette.primary.main,
              opacity: 0.6,
              animation: 'bounce 1.4s ease-in-out infinite',
              animationDelay: `${index * 0.2}s`,
              '@keyframes bounce': {
                '0%, 100%': {
                  transform: 'translateY(0)',
                },
                '50%': {
                  transform: 'translateY(-10px)',
                },
              },
            })}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Loader;
