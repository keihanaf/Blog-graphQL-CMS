import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../graphql/queries.js';
import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Typography, Box } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import CardEL from '../components/shared/CardEL.jsx';
import Loader from '../components/modules/Loader.jsx';

function AuthorPage() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>Error...</h4>;
  const {
    author: { name, field, avatar, description, post },
  } = data;

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={4} mt={6}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            src={avatar.url}
            sx={{
              width: 250,
              height: 250,
              border: '6px solid',
              borderColor: 'primary.light',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
          />
          <Typography
            component={'h3'}
            variant={'h4'}
            fontWeight={700}
            mt={4}
            color="primary"
            sx={{
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            component={'p'}
            variant={'h5'}
            color={'text.secondary'}
            mt={4}
            sx={{ opacity: 0.8 }}
          >
            {field}
          </Typography>
        </Grid>

        <Grid item xs={12} mt={4}>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              padding: '32px',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description.html),
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} mt={6}>
          <Typography component={'h3'} variant={'h5'} fontWeight={700}>
            {name} Blogs
          </Typography>
          <Grid container spacing={2} mt={2}>
            {post.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
