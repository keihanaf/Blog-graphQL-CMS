import React from 'react';
import { GET_AUTHORS_INFO } from '../graphql/queries.js';
import { useQuery } from '@apollo/client';
import { Avatar, Box, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from './modules/Loader.jsx';

function Authors() {
  const { data, loading, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (error) return <h4>Error...</h4>;

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        overflow: 'hidden',
        background: theme.palette.background.gradient,
      })}
    >
      {data.authors.map((author, index) => (
        <Box
          key={author.id}
          sx={(theme) => ({
            '&:not(:last-child)': {
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
          })}
        >
          <Link
            to={`/authors/${author.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={(theme) => ({
                p: 2,
                transition: theme.transitions.create(['background-color'], {
                  duration: theme.transitions.duration.standard,
                }),
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}08`, // 08 is opacity in hex
                },
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              })}
            >
              <Avatar
                src={author.avatar.url}
                sx={(theme) => ({
                  width: 60,
                  height: 60,
                  // Avatar border is already defined in theme.components.MuiAvatar
                })}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={(theme) => ({
                    mb: 0.5,
                    // Typography styles are already defined in theme.typography.subtitle1
                  })}
                >
                  {author.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                  })}
                >
                  Author
                </Typography>
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Paper>
  );
}

export default Authors;
