/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ICitation from '../util/types/citation';

type CitationFormatProps = ICitation;

export default function CitationProp(props: CitationFormatProps) {
  return (
    <Grid item container xs={12}>
      {/* The title of offense */}
      <Grid item xs={1.5}>
        <Typography> {props.title}</Typography>
      </Grid>
      {/* The title of offense */}
      <Grid item xs={1.5}>
        <Typography> {props.discretion}</Typography>
      </Grid>
      {/* The title of offense */}
      <Grid item xs={1.5}>
        <Typography> {props.jurisdiction}</Typography>
      </Grid>
    </Grid>
  );
}
