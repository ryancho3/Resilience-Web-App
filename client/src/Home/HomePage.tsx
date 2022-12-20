import React, { useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../util/redux/hooks';
import {
  logout as logoutAction,
  toggleAdmin,
  selectUser,
} from '../util/redux/userSlice';
import { logout as logoutApi, selfUpgrade } from './api';
import ScreenGrid from '../components/ScreenGrid';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Header from '../components/global/Header';
import SearchComponent from '../components/search/SearchComponent';
import { getData } from '../util/api';
import COLORS from '../assets/colors';
import { selectCitations } from '../util/redux/citationSlice';
import CitationProp, { sizes } from '../components/CitationFormat';

interface PromoteButtonProps {
  admin: boolean | null;
  handleSelfPromote: () => void;
  navigator: NavigateFunction;
}

/**
 * A button which, when clicked, will promote the user to admin. If the user is already admin, the button will be a link to the admin dashboard.
 * @param admin - a boolean indicating whether the user is an admin
 * @param handleSelfPromote - a function which promotes the user to admin
 * @param navigator - a function which navigates to a new page (passed in from parent function)
 */
function PromoteButton({
  admin,
  handleSelfPromote,
  navigator,
}: PromoteButtonProps) {
  if (admin === null) {
    return null;
  }
  return !admin ? (
    <PrimaryButton variant="contained" onClick={handleSelfPromote}>
      Promote self to admin
    </PrimaryButton>
  ) : (
    <PrimaryButton
      variant="contained"
      onClick={() => navigator('/users', { replace: true })}
    >
      View all users
    </PrimaryButton>
  );
}
/**
 * The HomePage of the user dashboard. Displays a welcome message, a logout button and a button to promote the user to admin if they are not already an admin. If the user is an admin, the button will navigate them to the admin dashboard. This utilizes redux to access the current user's information.
 */
function HomePage() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const [admin, setAdmin] = useState(user.admin);
  const logoutDispatch = () => dispatch(logoutAction());
  const handleLogout = async () => {
    if (await logoutApi()) {
      logoutDispatch();
      navigator('/login', { replace: true });
    }
  };

  const handleSelfPromote = async () => {
    const newAdminStatus = await selfUpgrade(user.email as string);
    if (newAdminStatus) {
      dispatch(toggleAdmin());
      setAdmin(true);
    }
  };

  // const results = useRef(null);
  const results = useAppSelector(selectCitations).citations;

  const categories = [
    'Title',
    'Discretion',
    'Jurisdiction',
    'Offense',
    'Keywords',
    'Duration',
    'Citation Link',
  ];

  // const message = `Welcome to the Boilerplate, ${user.firstName} ${user.lastName}!`;
  return (
    <ScreenGrid>
      <Header />
      <Grid container justifyContent="center" sx={{ marginTop: 12 }}>
        <Grid item container xs={9} justifyContent="center">
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
            Collateral Consequences Dashboard
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            justifyContent="center"
            fontFamily="Tiempos Headline"
          >
            Use the categories below to search and view details of policies
            relating to collateral consequences of a criminal conviction.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item flexDirection="row" xs={12} sx={{ paddingY: 2 }}>
          <SearchComponent />
        </Grid>
      </Grid>
      {results.length > 0 && (
        <Grid
          container
          justifyItems="center"
          display="grid"
          gridTemplateRows="repeat(5, 1fr)"
          rowSpacing={1}
          marginTop={3}
        >
          <Grid
            item
            container
            xs={11.5}
            border="#B7C8BA"
            justifyContent="center"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.47)',
              padding: 1,
            }}
          >
            {categories.map((item, index) => (
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={sizes[index]}
              >
                <Typography
                  color="#0D4E458F"
                  fontFamily="Tiempos Headline"
                  fontWeight={500}
                  textAlign="center"
                  fontSize={19}
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {results.map((citation) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CitationProp {...citation} />
          ))}
        </Grid>
      )}

      {/* <SearchComponent /> */}
      {/* <Grid
        item
        container
        justifyContent="center"
        xs={12}
        sx={{ backgroundColor: 'green', padding: 10, height: 100 }}
      >
        <PromoteButton
          admin={admin}
          handleSelfPromote={handleSelfPromote}
          navigator={navigator}
        />
      </Grid>
      <Grid justifyContent="center">
        <Button onClick={handleLogout}>Logout</Button>
      </Grid> */}
    </ScreenGrid>
  );
}

export default HomePage;
