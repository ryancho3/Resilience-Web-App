import React from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';

export default function OutputComponent() {
  return (
    <Box
      sx={{ backgroundColor: 'pink', width: '95%', padding: 1, height: 170 }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: 'red', height: '15%' }}
      >
        <Typography>Ineligible for: Corporate Officer</Typography>
      </Grid>
      <Box display="flex" height={0.85}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: 'gray' }}
        >
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{ padding: 0.5, backgroundColor: 'pink', display: 'flex' }}
          >
            <Typography marginRight={0.3}>Discretion:</Typography>
            <Avatar sx={{ bgcolor: 'red', height: 15, width: 15 }}> </Avatar>
          </Box>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: 'pink', height: '25%' }}
        >
          <Typography>Citation link</Typography>
        </Grid>
      </Box>
    </Box>
  );
}
