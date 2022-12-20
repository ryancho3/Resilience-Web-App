import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

export default function Header() {
  const navItems = ['Search Directory', 'Search History'];

  return (
    <AppBar position="sticky" component="nav">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h3"
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
            {navItems.map((item) => (
              <Button
                color="inherit"
                onClick={() => {
                  console.log('go to ', item);
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
