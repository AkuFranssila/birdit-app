import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as BirditLogoWithText } from '../../assets/images/BirditWithText.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fixed>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ width: '50%' }}>
          <Box>
            <Box sx={{ translate: '-4.5rem' }}>
              {/* TODO: Fix logo size */}
              <BirditLogoWithText />
            </Box>
          </Box>
          <Box sx={{ marginTop: '-1.5rem' }}>
            <Typography variant="body2" color="inherit">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '50%',
            textAlign: 'end',
            flexDirection: 'row',
            display: 'flex'
          }}
        >
          <Box sx={{ width: '50%' }}>
            <Box>
              <Typography
                variant="body2"
                color="inherit"
                sx={{ fontWeight: 'bold' }}
              >
                Explore
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '0.3rem' }}>
              <Link to="/tournaments">
                <Typography variant="body2" color="inherit">
                  Tournaments
                </Typography>
              </Link>
            </Box>
            <Box sx={{ paddingTop: '0.3rem' }}>
              <Link to="/weeklies">
                <Typography variant="body2" color="inherit">
                  Weeklies
                </Typography>
              </Link>
            </Box>
            <Box sx={{ paddingTop: '0.3rem' }}>
              <Link to="/practices">
                <Typography variant="body2" color="inherit">
                  Practices
                </Typography>
              </Link>
            </Box>
            <Box sx={{ paddingTop: '0.3rem' }}>
              <Link to="/courses">
                <Typography variant="body2" color="inherit">
                  Courses
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Box>
              <Typography
                variant="body2"
                color="inherit"
                sx={{ fontWeight: 'bold' }}
              >
                Resources
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '0.3rem' }}>
              <Link to="/about">
                <Typography variant="body2" color="inherit">
                  About us
                </Typography>
              </Link>
            </Box>
            <Box sx={{ paddingTop: '0.3rem' }}>
              <Link to="/blog">
                <Typography variant="body2" color="inherit">
                  Blog
                </Typography>
              </Link>
            </Box>
            <Box sx={{ paddingTop: '0.3rem' }}>
              <Link to="/help">
                <Typography variant="body2" color="inherit">
                  Help
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '1rem',
          paddingTop: '2rem'
        }}
      >
        <Box sx={{ pr: '1rem' }}>
          <Link to="/about">About</Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ pl: '1rem', pr: '1rem' }}>
          <Link to="/about">Contact</Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ pl: '1rem' }}>
          <Link to="/about">Privacy</Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '1rem'
        }}
      >
        <Typography variant="body2" color="inherit">
          © {currentYear} Birdit Oy, All Rights Reserved
        </Typography>
      </Box>
    </Container>
  );
};
