import {
  Autocomplete,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React from 'react';

interface OffenseTypeComponentProps {
  selectedOffense: string[];
  setSelectedOffense: (t: string[]) => void;
}

const offenseTypes = [
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
export default function OffenseType({
  selectedOffense,
  setSelectedOffense,
}: OffenseTypeComponentProps) {
  // const handleChange = ({event: SelectChangeEvent, newEvent}): void => {
  //   setSelectedOffense(event.target.value);
  // };
  return (
    <Autocomplete
      disablePortal
      multiple
      filterSelectedOptions
      id="offense-select"
      options={offenseTypes}
      value={selectedOffense}
      onChange={(event, newValue) => {
        setSelectedOffense(newValue);
      }}
      fullWidth
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} label="Offense" />}
    />
  );
}
