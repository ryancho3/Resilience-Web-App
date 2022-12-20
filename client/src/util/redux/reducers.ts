import userReducer from './userSlice';
// eslint-disable-next-line import/no-cycle
import citationsReducer from './citationSlice';

// This is where you would add reducers for slices of the redux store.
// Please ensure that the key for each reducer is the same as the name of the slice (or else the selector will not work).
const reducers = {
  user: userReducer,
  citations: citationsReducer,
};

export default reducers;
