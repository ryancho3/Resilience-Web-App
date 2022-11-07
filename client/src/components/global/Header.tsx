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
  const navItems = ['Directory', 'History', 'About'];

  return (
    <AppBar position="absolute" component="nav">
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
            }}
          >
            Resilience Education
          </Typography>
          <Box
            sx={{
              position: 'absoloute',
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            {navItems.map((item) => (
              <Button color="inherit">{item}</Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
