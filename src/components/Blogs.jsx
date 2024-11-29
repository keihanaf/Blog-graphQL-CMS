import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../graphql/queries.js';
import { Grid, Box, Typography } from '@mui/material';
import CardEL from './shared/CardEL.jsx';
import Loader from './modules/Loader.jsx';

function Blogs() {
  const { data, loading, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;
  if (error)
    return (
      <Typography
        variant="h6"
        color="error"
        sx={(theme) => ({
          textAlign: 'center',
          py: 3,
        })}
      >
        Error loading blogs...
      </Typography>
    );

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        minHeight: '200px',
      })}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={(theme) => ({
          animation: 'fadeIn 0.5s ease-in-out',
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
              transform: 'translateY(10px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        })}
      >
        {data.posts.map((post) => (
          <Grid
            key={post.id}
            item
            xs={12}
            sm={6}
            md={4}
            sx={(theme) => ({
              display: 'flex',
              transition: theme.transitions.create(['transform'], {
                duration: theme.transitions.duration.standard,
              }),
            })}
          >
            <CardEL {...post} />
          </Grid>
        ))}
      </Grid>

      {data.posts.length === 0 && (
        <Typography
          variant="h6"
          sx={(theme) => ({
            textAlign: 'center',
            color: theme.palette.text.secondary,
            py: 4,
          })}
        >
          No posts available
        </Typography>
      )}
    </Box>
  );
}

export default Blogs;
