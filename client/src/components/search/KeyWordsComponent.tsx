/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

interface KeyWordComponentProps {
  selectKeyWords: string[];
  setSelectedKeyWords: (t: string[]) => void;
}

const keywords = [
  'Any felony',
  'Any Misdeameanor',
  'Child Support offenses',
  'Controlled substances offenses',
  'Crime of moral turpitude',
  'Crimes involving fraud, dishonesty, misrepresentation or money-laundering',
  "Crimes of violence, including 'person offenses'",
  'Election-related offenses',
  'Motor vehicle offenses',
  'N/A (background check, general relief)',
  'Public corruption offenses',
  'Recreational license offenses',
  'Sex offenses',
  'Weapon offenses',
  'Other',
];
export default function KeyWords({
  selectKeyWords,
  setSelectedKeyWords,
}: KeyWordComponentProps) {
  return (
    <Autocomplete
      fullWidth
      disablePortal
      multiple
      filterSelectedOptions
      id="keywords-select"
      options={keywords}
      value={selectKeyWords}
      onChange={(event, newValue) => {
        setSelectedKeyWords(newValue);
      }}
      // sx={{
      //   display: 'inline-block',
      //   '& input': {
      //     borderRadius: 8,
      //     bgcolor: 'white',
      //     color: (theme) =>
      //       theme.palette.getContrastText(theme.palette.background.paper),
      //   },
      // }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => (
        <TextField variant="outlined" {...params} label="Key Words" />
      )}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          // console.log(event.currentTarget.);
          // your handler code
        }
      }}
    />
  );
}
