import React from 'react';
import { Typography, Container, Box, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1A237E',
        color: '#fff',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              BLOGIFY
            </Typography>

            <Box sx={{ mb: 2 }}>
              <IconButton color="inherit">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </Box>

            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                letterSpacing: 1,
              }}
            >
              Blog project with GraphQL | React.Js
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
