/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICitation from '../types/citation';
import type { RootState } from './store';

export interface CitationsState {
  citations: Array<ICitation>;
  loading: boolean;
}

interface Payload {
  citations: Array<ICitation>;
  loading: boolean;
}

const initialState = {
  citations: [],
  loading: false,
} as CitationsState;

/**
 * A slice of the redux store that contains the citation list of recent serach. This slice defines reducer for searching a user, logging out a user, and promoting a user to admin.
 */
const citationSlice = createSlice({
  name: 'citations',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<Payload>) => {
      // console.log(action.payload.citations, 'this is the payload');
      state.citations = action.payload.citations;
      state.loading = action.payload.loading;
    },
    clear: (state) => {
      state.citations = [];
    },
  },
});

export const { search, clear } = citationSlice.actions;
export default citationSlice.reducer;

/**
 * A selector that returns the citations state
 * @param state The redux store state
 * @returns The user state
 */
export const selectCitations = (state: RootState) => state.citations;
