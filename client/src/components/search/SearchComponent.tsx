import React, { useState } from 'react';
import { Box, Button, Grid, InputLabel, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getOutcomes } from '../../util/api';
import StateComponent from './StateComponent';
import OffenseType from './OffenseTypeComponent';
import KeyWords from './KeyWordsComponent';
import MapComponent from './MapComponent';
import PrimaryButton from '../buttons/PrimaryButton';
import COLORS from '../../assets/colors';
import { useAppDispatch, useAppSelector } from '../../util/redux/hooks';
import ICitation from '../../util/types/citation';
import {
  clear as clearCitations,
  search as searchCitations,
  selectCitations,
} from '../../util/redux/citationSlice';

interface SearchComponentProps {
  results: any[];
}

export default function SearchComponent() {
  const [mapState, setSelectedMapState] = useState('');
  const [offense, setSelectedOffense] = useState<string[]>([]);
  const [keywords, setSelectedKeyWords] = useState<string[]>([]);
  const showAlert = false;

  const dispatch = useAppDispatch();
  function dispatchCitations(citations: Array<ICitation>) {
    console.log(citations);
    dispatch(searchCitations({ citations, loading: false }));
  }

  const navigate = useNavigate();
  const citations = useAppSelector(selectCitations);

  async function handleSubmit() {
    if (mapState !== '' && offense.length > 0) {
      getOutcomes('citation/citations', mapState, offense, keywords).then(
        (obj) => {
          console.log('get here');
          dispatchCitations(obj.data);
          // navigate('/home');
        },
      );
    }
  }

  async function handleClear() {
    dispatch(clearCitations());
  }

  return (
    <Box>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={8}>
          <MapComponent
            selectedMapState={mapState}
            setSelectedMapState={setSelectedMapState}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={4}
        sx={{
          marginBottom: 10,
        }}
      >
        <Grid item container xs={12} justifyContent="center">
          <Grid item container justifyContent="center" xs={3.5}>
            <Typography sx={{ mb: 1.5 }}>
              Please input your jurisdiction
            </Typography>
            <StateComponent
              selectedState={mapState}
              setSelectState={setSelectedMapState}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <Grid item container justifyContent="center" xs={3.5}>
            <Typography sx={{ mb: 1.5 }}>
              Please input your offense type
            </Typography>
            <OffenseType
              selectedOffense={offense}
              setSelectedOffense={setSelectedOffense}
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <Grid item container justifyContent="center" xs={3.5}>
            <Typography sx={{ mb: 1.5 }}>
              Please input industry related keywords
            </Typography>
            <KeyWords
              selectKeyWords={keywords}
              setSelectedKeyWords={setSelectedKeyWords}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} alignItems="center" justifyContent="center">
        <Grid container xs={12} justifyContent="center">
          <PrimaryButton
            sx={{
              mb: 2,
              backgroundColor: COLORS.secondaryGreen,
              width: '23%',
              color: 'white',
              borderRadius: 10,
            }}
            type="submit"
            variant="contained"
            onClick={() => handleSubmit()}
          >
            Search
          </PrimaryButton>
        </Grid>
        <PrimaryButton
          sx={{
            color: 'white',
            mt: 1,
            borderRadius: 10,
            backgroundColor: 'gray',
          }}
          type="reset"
          variant="contained"
          onClick={() => {
            // setSelectedOffense([]);
            // setSelectedKeyWords([]);
            // setSelectedMapState('');
            handleClear();
            console.log(citations);
          }}
        >
          Reset Search
        </PrimaryButton>
      </Grid>
    </Box>
  );
}
