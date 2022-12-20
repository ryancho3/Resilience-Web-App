import {
  Autocomplete,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { getData } from '../../util/api';

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
  const loaded = useRef(false);
  const [data, setData] = useState(offenseTypes);

  const updateOffenseTypes = async (): Promise<void> => {
    try {
      await getData('citation/offense_type/all').then((obj) => {
        // setData()
        loaded.current = true;
      });
    } catch (e) {
      console.log(e);
      loaded.current = false;
    }
  };

  useEffect(() => {
    updateOffenseTypes();
  });

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
