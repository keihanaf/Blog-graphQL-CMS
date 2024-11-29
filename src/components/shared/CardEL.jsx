import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CardEL({ title, slug, coverPhoto, author }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: (theme) => theme.palette.background.gradient,
      }}
    >
      {author && (
        <CardHeader
          avatar={
            <Avatar
              src={author.avatar.url}
              sx={{
                width: 50,
                height: 50,
              }}
            />
          }
          title={<Typography variant="subtitle1">{author.name}</Typography>}
        />
      )}
      <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
        <CardMedia
          component="img"
          image={coverPhoto.url}
          alt={slug}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, pt: 3 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            height: '2.4em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button variant="contained" fullWidth endIcon={<ArrowForwardIcon />}>
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
