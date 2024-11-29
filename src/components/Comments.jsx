import React from 'react';
import { GET_POSTS_COMMENTS } from '../graphql/queries.js';
import { useQuery } from '@apollo/client';
import { Avatar, Box, Paper, Typography, Divider } from '@mui/material';
import Loader from './modules/Loader.jsx';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Comments({ slug }) {
  const { data, loading, error } = useQuery(GET_POSTS_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <Typography color="error" variant="h6" textAlign="center">
        Error loading comments...
      </Typography>
    );

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        mt: 6,
        background: theme.palette.background.gradient,
        animation: 'fadeIn 0.5s ease-in-out',
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      })}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          sx={(theme) => ({
            color: theme.palette.primary.main,
            mb: 4,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: 60,
              height: 4,
              borderRadius: theme.shape.borderRadius / 2,
              backgroundColor: theme.palette.primary.main,
            },
          })}
        >
          Comments ({data.comments.length})
        </Typography>

        {data.comments.map((comment, index) => (
          <Box
            key={comment.id}
            sx={(theme) => ({
              transition: theme.transitions.create(['transform', 'box-shadow']),
              '&:hover': {
                transform: 'translateX(8px)',
              },
            })}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mb: 3,
              }}
            >
              <Avatar
                sx={(theme) => ({
                  width: 50,
                  height: 50,
                  bgcolor: theme.palette.primary.main,
                  fontWeight: 600,
                  transition: theme.transitions.create(['transform']),
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                })}
              >
                {comment.name[0].toUpperCase()}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={(theme) => ({
                    mb: 1,
                    color: theme.palette.text.primary,
                  })}
                >
                  {comment.name}
                </Typography>
                <Box
                  sx={(theme) => ({
                    position: 'relative',
                    pl: 3,
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 4,
                      borderRadius: 2,
                      backgroundColor: theme.palette.primary.light,
                      opacity: 0.5,
                    },
                  })}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: -10,
                      left: -10,
                      color: 'primary.light',
                      opacity: 0.2,
                      fontSize: 40,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={(theme) => ({
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    })}
                  >
                    {comment.text}
                  </Typography>
                </Box>
              </Box>
            </Box>
            {index < data.comments.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default Comments;
