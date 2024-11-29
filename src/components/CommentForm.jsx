import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Paper, Box } from '@mui/material';
import { SEND_COMMENT } from '../graphql/mutations.js';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';

function CommentForm({ slug }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [sendComment, { loading }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
    onCompleted: () => {
      toast.success('Comment sent successfully!');
      setName('');
      setEmail('');
      setText('');
    },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn('Please fill all fields');
    }
  };

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        background: theme.palette.background.gradient,
      })}
    >
      <Box
        sx={(theme) => ({
          p: 3,
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
          Leave a Comment
        </Typography>

        <Grid
          container
          spacing={3}
          sx={(theme) => ({
            '& .MuiTextField-root': {
              transition: theme.transitions.create(['box-shadow']),
              '&:hover': {
                '& .MuiOutlinedInput-root': {
                  boxShadow: `0 0 0 1px ${theme.palette.primary.main}25`,
                },
              },
            },
          })}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Your Comment"
              fullWidth
              multiline
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={loading}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant="contained"
              fullWidth
              endIcon={<SendIcon />}
              onClick={sendHandler}
              disabled={loading}
              sx={(theme) => ({
                py: 1.5,
                background: theme.palette.primary.main,
                '&:hover': {
                  background: theme.palette.primary.dark,
                },
              })}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default CommentForm;
