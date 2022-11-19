import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Typography,
} from '@mui/material';
import StateComponent from './StateComponent';
import OffenseType from './OffenseTypeComponent';
import KeyWords from './KeyWordsComponent';

export default function SearchComponent() {
  const [state, setSelectState] = useState('');
  const [offense, setSelectedOffense] = useState(['']);
  const [keywords, setSelectedKeyWords] = useState(['']);

  return (
    // <FormControl fullWidth>
    <Box>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={3.5}>
          <StateComponent
            selectedState={state}
            setSelectState={setSelectState}
          />
        </Grid>
        <Grid item xs={3.5} alignItems="center" justifyContent="center">
          <OffenseType
            selectedOffense={offense}
            setSelectedOffense={setSelectedOffense}
          />
        </Grid>
        <Grid item xs={3.5}>
          <KeyWords
            selectKeyWords={keywords}
            setSelectedKeyWords={setSelectedKeyWords}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Button
          sx={{ mt: 1, mr: 1 }}
          type="submit"
          variant="outlined"
          onClick={() => {
            console.log(state, offense, keywords);
          }}
        >
          Search Database
        </Button>
        <Button
          sx={{ mt: 1, mr: 1 }}
          type="reset"
          variant="contained"
          onClick={() => {
            setSelectedOffense([]);
            setSelectedKeyWords([]);
            setSelectState('');
            // console.log(state, offense, keywords);
          }}
        >
          Reset Search
        </Button>
      </Grid>
      {/* // </FormControl> */}
    </Box>
  );
}
