import React, { useState } from 'react';
import { Link, TextField, Grid, Typography, colors } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { fontFamily } from '@mui/system';
import FormCol from '../components/form/FormCol';
import {
  emailRegex,
  InputErrorMessage,
  nameRegex,
  passwordRegex,
} from '../util/inputvalidation';
import { register } from './api';
import AlertDialog from '../components/AlertDialog';
import PrimaryButton from '../components/buttons/PrimaryButton';
import ScreenGrid from '../components/ScreenGrid';
import FormRow from '../components/form/FormRow';
import SliderButton from '../components/buttons/SliderButton';
import FormGrid from '../components/form/FormGrid';
import COLORS from '../assets/colors';
import 'client/src/index.css';

/**
 * A page users visit to be able to register for a new account by inputting
 * fields such as their name, email, and password.
 */
function RegisterPage() {
  const navigate = useNavigate();

  // Default values for state
  const defaultValues = {
    role: 'fip',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const defaultShowErrors = {
    role: '',
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    alert: false,
  };
  const defaultErrorMessages = {
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    alert: '',
  };
  type ValueType = keyof typeof values;

  // State values and hooks
  const [values, setValueState] = useState(defaultValues);
  const [showError, setShowErrorState] = useState(defaultShowErrors);
  const [errorMessage, setErrorMessageState] = useState(defaultErrorMessages);
  const [alertTitle, setAlertTitle] = useState('Error');
  const [isRegistered, setRegistered] = useState(false);

  // Helper functions for changing only one field in a state object
  const setValue = (field: string, value: string) => {
    setValueState((prevState) => ({
      ...prevState,
      ...{ [field]: value },
    }));
  };
  const setShowError = (field: string, show: boolean) => {
    setShowErrorState((prevState) => ({
      ...prevState,
      ...{ [field]: show },
    }));
  };
  const setErrorMessage = (field: string, msg: string) => {
    setErrorMessageState((prevState) => ({
      ...prevState,
      ...{ [field]: msg },
    }));
  };

  const handleAlertClose = () => {
    if (isRegistered) {
      navigate('/login');
    }
    setShowError('alert', false);
  };

  const clearErrorMessages = () => {
    setShowErrorState(defaultShowErrors);
    setErrorMessageState(defaultErrorMessages);
  };

  const validateInputs = () => {
    clearErrorMessages();
    let isValid = true;

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const valueTypeString in values) {
      const valueType = valueTypeString as ValueType;
      if (!values[valueType]) {
        setErrorMessage(valueTypeString, InputErrorMessage.MISSING_INPUT);
        setShowError(valueTypeString, true);
        isValid = false;
      }
    }

    if (!values.firstName.match(nameRegex)) {
      setErrorMessage('firstName', InputErrorMessage.INVALID_NAME);
      setShowError('firstName', true);
      isValid = false;
    }
    if (!values.lastName.match(nameRegex)) {
      setErrorMessage('lastName', InputErrorMessage.INVALID_NAME);
      setShowError('lastName', true);
      isValid = false;
    }
    if (!values.email.match(emailRegex)) {
      setErrorMessage('email', InputErrorMessage.INVALID_EMAIL);
      setShowError('email', true);
      isValid = false;
    }
    if (!values.password.match(passwordRegex)) {
      setErrorMessage('password', InputErrorMessage.INVALID_PASSWORD);
      setShowError('password', true);
      isValid = false;
    }
    if (!(values.confirmPassword === values.password)) {
      setErrorMessage('confirmPassword', InputErrorMessage.PASSWORD_MISMATCH);
      setShowError('confirmPassword', true);
      isValid = false;
    }

    return isValid;
  };

  const textFieldStyle = {
    background: COLORS.offWhite,
    fontFamily: 'Druk',
  };

  async function handleSubmit() {
    if (validateInputs()) {
      register(
        values.role,
        values.firstName,
        values.lastName,
        values.email,
        values.password,
      )
        .then(() => {
          setShowError('alert', true);
          setAlertTitle('');
          setRegistered(true);
          setErrorMessage('alert', 'Check email to verify account');
        })
        .catch((e) => {
          setShowError('alert', true);
          setErrorMessage('alert', e.message);
        });
    }
    console.log(values.role);
  }

  const title = 'Sign Up';
  return (
    <ScreenGrid>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ height: '100vh' }}
      >
        <Grid item md={6} xs={12} sx={{ padding: 20 }}>
          <FormGrid>
            <FormCol>
              <Grid item container justifyContent="left">
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: 'Druk',
                    fontSize: 64,
                    color: COLORS.primaryDark,
                  }}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item width="1">
                <FormControl>
                  <FormLabel
                    id="role"
                    style={{
                      fontFamily: 'Druk',
                      color: COLORS.primaryGreen,
                      fontSize: 20,
                    }}
                  >
                    I am an...
                  </FormLabel>
                </FormControl>
              </Grid>
              <Grid item container justifyContent="center">
                <SliderButton setRole={setValue} role={values.role} />
              </Grid>
              <FormRow>
                <Grid item width=".5">
                  <TextField
                    fullWidth
                    error={showError.firstName}
                    helperText={errorMessage.firstName}
                    size="small"
                    type="text"
                    required
                    label="First Name"
                    value={values.firstName}
                    onChange={(e) => setValue('firstName', e.target.value)}
                    style={textFieldStyle as React.CSSProperties}
                  />
                </Grid>
                <Grid item width=".5">
                  <TextField
                    fullWidth
                    error={showError.lastName}
                    helperText={errorMessage.lastName}
                    size="small"
                    type="text"
                    required
                    label="Last Name"
                    value={values.lastName}
                    onChange={(e) => setValue('lastName', e.target.value)}
                    style={textFieldStyle as React.CSSProperties}
                  />
                </Grid>
              </FormRow>
              <Grid item width="1">
                <TextField
                  fullWidth
                  error={showError.email}
                  helperText={errorMessage.email}
                  size="small"
                  type="text"
                  required
                  label="Email"
                  value={values.email}
                  onChange={(e) => setValue('email', e.target.value)}
                  style={textFieldStyle as React.CSSProperties}
                />
              </Grid>
              <FormRow>
                <Grid item width=".5">
                  <TextField
                    fullWidth
                    error={showError.password}
                    helperText={errorMessage.password}
                    size="small"
                    type="password"
                    required
                    label="Password"
                    value={values.password}
                    onChange={(e) => setValue('password', e.target.value)}
                    style={textFieldStyle as React.CSSProperties}
                  />
                </Grid>
                <Grid item container width=".5">
                  <TextField
                    fullWidth
                    error={showError.confirmPassword}
                    helperText={errorMessage.confirmPassword}
                    size="small"
                    type="password"
                    required
                    label=" Confirm Password"
                    value={values.confirmPassword}
                    onChange={(e) =>
                      setValue('confirmPassword', e.target.value)
                    }
                    style={textFieldStyle as React.CSSProperties}
                  />
                </Grid>
              </FormRow>
              <Grid item container justifyContent="center">
                <PrimaryButton
                  fullWidth
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: COLORS.secondaryGreen,
                    color: COLORS.primaryGreen,
                    borderRadius: 45,
                    fontFamily: 'Druk',
                    textTransform: 'unset',
                    fontSize: 22,
                    padding: 8,
                    fontWeight: 500,
                  }}
                  onClick={() => handleSubmit()}
                >
                  Create account
                </PrimaryButton>
              </Grid>
              <FormRow>
                <Grid
                  container
                  justifyContent="center"
                  style={{ fontFamily: 'Druk', fontSize: 18 }}
                >
                  Already have an account?&nbsp;
                  <Link component={RouterLink} to="../">
                    Log in
                  </Link>
                </Grid>
              </FormRow>
            </FormCol>
          </FormGrid>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            height: '100vh',
            bgcolor: COLORS.primaryGreen,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 1,
          }}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/5bc4fff016b6405451831f02/1542583791493-LWCZCRGAQRX0OAXNT8OD/REbiggerWHITE.png?format=1500w"
            alt="Logo"
            style={{
              width: '66%',
              height: '9%',
              top: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </Grid>
        {/* The alert that pops up */}
        <Grid item>
          <AlertDialog
            showAlert={showError.alert}
            title={alertTitle}
            message={errorMessage.alert}
            onClose={handleAlertClose}
          />
        </Grid>
      </Grid>
    </ScreenGrid>
  );
}

export default RegisterPage;
