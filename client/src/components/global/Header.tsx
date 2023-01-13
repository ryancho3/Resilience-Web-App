import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nav = useNavigate();

  const navItems = ['Search Directory', 'Search History'];

  return (
    <AppBar position="absolute" component="nav">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            Resilience Education
          </Typography>
          <Box
            right={-100}
            sx={{
              position: 'absoloute',
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            {navItems.map((item, i) => (
              <Button
                color="secondary"
                onClick={() => {
                  if (i === 1) {
                    nav('/profile');
                  } else {
                    nav('/home');
                  }
                  console.log('your on');
                  // console.log('go to ', item);
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
