import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../util/redux/hooks';
import {
  logout as logoutAction,
  toggleAdmin,
  selectUser,
} from '../util/redux/userSlice';
import ScreenGrid from '../components/ScreenGrid';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Header from '../components/global/Header';
import SearchComponent from '../components/search/SearchComponent';
import { getData } from '../util/api';
import COLORS from '../assets/colors';
import { selectCitations } from '../util/redux/citationSlice';
import CitationProp, { sizes } from '../components/CitationFormat';

/**
 * The Profile page of the user dashboard.
 */
function ProfilePage() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const history = [
    { jurisdiction: 'Wyoming', offenseType: 'Any Felony', keyWords: 'test' },
    { jurisdiction: 'Arizona', offenseType: 'Any Felony', keyWords: 'test' },
    { jurisdiction: 'Florida', offenseType: 'Any Felony', keyWords: 'test' },
  ];

  // const message = `Welcome to the Boilerplate, ${user.firstName} ${user.lastName}!`;
  return (
    <ScreenGrid>
      <Header />
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: 12, marginBottom: 12 }}
      >
        <Grid
          item
          container
          xs={9}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Typography
            variant="h3"
            fontFamily="Druk Trial"
            fontWeight={700}
            noWrap
            color={COLORS.primaryGreen}
            sx={{
              // backgroundColor: COLORS.secondaryGreen,
              padding: 1,
              marginBottom: 2,
            }}
          >
            Profile
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            justifyContent="center"
            fontFamily="Tiempos Headline"
          >
            {user.firstName} {user.lastName}
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            justifyContent="center"
            fontFamily="Tiempos Headline"
          >
            Email: {user.email}
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid container justifyContent="center" xs={12} mb={2}>
          <Typography variant="h5" fontFamily="Tiempos Headline">
            Search History
          </Typography>
        </Grid>
        {history.map((item, i) => (
          <Grid container justifyContent="center" xs={12}>
            <Grid
              item
              container
              justifyContent="space-between"
              xs={5}
              borderBottom={1}
              sx={{ borderColor: 'rgba(13, 78, 69, 0.24)' }}
              mb={1.8}
              pb={2}
            >
              <Grid container justifyContent="center" xs={1}>
                <Typography>{i + 1}</Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                border={0.5}
                sx={{ borderColor: COLORS.primaryGreen, borderRadius: 2 }}
                xs={3}
              >
                <Typography color={COLORS.primaryGreen}>
                  {item.jurisdiction}
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                border={0.5}
                sx={{ borderColor: COLORS.primaryGreen, borderRadius: 2 }}
                xs={3}
              >
                <Typography color={COLORS.primaryGreen}>
                  {item.offenseType}
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                border={0.5}
                sx={{ borderColor: COLORS.primaryGreen, borderRadius: 2 }}
                xs={3}
              >
                <Typography color={COLORS.primaryGreen}>
                  {item.keyWords}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </ScreenGrid>
  );
}

export default ProfilePage;
