import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

interface StateComponentProps {
  selectedState: string;
  setSelectState: (t: string) => void;
}

const states = [
  'AK - Alaska',
  'AL - Alabama',
  'AR - Arkansas',
  'AS - American Samoa',
  'AZ - Arizona',
  'CA - California',
  'CO - Colorado',
  'CT - Connecticut',
  'DC - District of Columbia',
  'DE - Delaware',
  'FL - Florida',
  'GA - Georgia',
  'GU - Guam',
  'HI - Hawaii',
  'IA - Iowa',
  'ID - Idaho',
  'IL - Illinois',
  'IN - Indiana',
  'KS - Kansas',
  'KY - Kentucky',
  'LA - Louisiana',
  'MA - Massachusetts',
  'MD - Maryland',
  'ME - Maine',
  'MI - Michigan',
  'MN - Minnesota',
  'MO - Missouri',
  'MS - Mississippi',
  'MT - Montana',
  'NC - North Carolina',
  'ND - North Dakota',
  'NE - Nebraska',
  'NH - New Hampshire',
  'NJ - New Jersey',
  'NM - New Mexico',
  'NV - Nevada',
  'NY - New York',
  'OH - Ohio',
  'OK - Oklahoma',
  'OR - Oregon',
  'PA - Pennsylvania',
  'PR - Puerto Rico',
  'RI - Rhode Island',
  'SC - South Carolina',
  'SD - South Dakota',
  'TN - Tennessee',
  'TX - Texas',
  'UT - Utah',
  'VA - Virginia',
  'VI - Virgin Islands',
  'VT - Vermont',
  'WA - Washington',
  'WI - Wisconsin',
  'WV - West Virginia',
  'WY - Wyoming',
];
export default function StateComponent({
  selectedState,
  setSelectState,
}: StateComponentProps) {
  const handleChange = (event: SelectChangeEvent): void => {
    setSelectState(event.target.value as string);
  };
  return (
    <Select
      labelId="state-select-label"
      id="state-select"
      fullWidth
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      }}
      value={selectedState}
      label="State"
      onChange={handleChange}
      variant="filled"
    >
      {states.map((state) => (
        <MenuItem value={state}>{state}</MenuItem>
      ))}
    </Select>
  );
}
