/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { getData } from '../../util/api';

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
  const loaded = useRef(false);
  const [data, setData] = useState(keywords);

  const updateKeyWords = async (): Promise<void> => {
    try {
      await getData('citation/keywords/all').then((obj) => {
        // eslint-disable-next-line func-names
        const keywordArray: string[] = obj.data.map(function (item: {
          keyword: string;
        }) {
          return item.keyword;
        });
        setData(keywordArray.sort());
        loaded.current = true;
      });
    } catch (e) {
      console.log(e);
      loaded.current = false;
    }
  };

  updateKeyWords();

  return (
    <Autocomplete
      fullWidth
      disablePortal
      multiple
      filterSelectedOptions
      id="keywords-select"
      options={loaded ? data : keywords}
      value={selectKeyWords}
      onChange={(event, newValue) => {
        setSelectedKeyWords(newValue);
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => (
        <TextField variant="outlined" {...params} label="Key Words" />
      )}
    />
  );
}
