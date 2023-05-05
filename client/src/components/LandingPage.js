import './LandingPage.css';
import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { LinkedIn, Instagram, DirectionsRun } from '@mui/icons-material';

const LandingPage = () => {
  return (
    <Box
      className="landing-page"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <video className="background-video" autoPlay loop muted>
        <source src="/media/background2.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          backgroundColor: 'rgba(127, 255, 212, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></Box>
      {/* Navigation */}
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Prioritizer
          </Typography>
          <Button color="inherit">Log In / Register</Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingRight: '3%',
          paddingBottom: '3%',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginBottom: '16px', borderRadius: '32px' }}
        >
          Start New<br />Collaboration Project
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginBottom: '16px', borderRadius: '32px' }}
        >
          Continue Your<br />Existing Project
        </Button>
      </Box>

      {/* Footer */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            (c) Ville Halmes 2023
          </Typography>
          <Box>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <DirectionsRun />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;


