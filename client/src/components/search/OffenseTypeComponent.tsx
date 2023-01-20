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
  const loaded = useRef(false);
  const [data, setData] = useState(offenseTypes);

  const updateOffenseTypes = async (): Promise<void> => {
    try {
      await getData('citation/offense_type/all').then((obj) => {
        // eslint-disable-next-line func-names
        const offenseArray: string[] = obj.data.map(function (item: {
          offense: string;
        }) {
          return item.offense;
        });
        offenseArray.push('Any felony');
        setData(offenseArray.sort());
        loaded.current = true;
      });
    } catch (e) {
      console.log(e);
      loaded.current = false;
    }
  };

  updateOffenseTypes();

  return (
    <Autocomplete
      disablePortal
      multiple
      filterSelectedOptions
      id="offense-select"
      options={loaded ? data : offenseTypes}
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
