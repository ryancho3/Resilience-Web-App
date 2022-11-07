import React, { useState } from 'react';
import { FormControl, Grid, InputLabel, Typography } from '@mui/material';
import StateComponent from './StateComponent';

export default function SearchComponent() {
  const [state, setSelectState] = useState('');
  return (
    <FormControl fullWidth>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={3.5}>
          {/* <InputLabel id="state-select-label">State</InputLabel> */}
          <StateComponent
            selectedState={state}
            setSelectState={setSelectState}
          />
        </Grid>
        <Grid item xs={3.5} alignItems="center" justifyContent="center">
          <Typography sx={{ textAlign: 'center', backgroundColor: 'orange' }}>
            Offense Type
          </Typography>
        </Grid>
        <Grid item xs={3.5} sx={{ backgroundColor: 'green' }}>
          <Typography>Key Words</Typography>
        </Grid>
      </Grid>
    </FormControl>
  );
}
