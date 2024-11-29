import React from 'react';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { GET_POST_INFO } from '../graphql/queries.js';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/modules/Loader.jsx';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import sanitizeHtml from 'sanitize-html';
import CommentForm from '../components/CommentForm.jsx';
import Comments from '../components/Comments.jsx';

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>Error...</h4>;

  return (
    <Container maxWidth={'lg'}>
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Typography
            component={'h2'}
            variant={'h4'}
            color={'primary'}
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowForwardRoundedIcon
            onClick={() => navigate(-1)}
            cursor={'pointer'}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width={'100%'}
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display={'flex'} alignItems={'center'}>
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginRight: 2 }}
          />
          <Box component={'div'}>
            <Typography component={'p'} variant={'h5'} fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component={'p'} variant={'p'} color={'textSecondary'}>
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
