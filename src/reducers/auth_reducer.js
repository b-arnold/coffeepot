/*
  Auth Reducer
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/

  import {
    LOGIN_EMAIL_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    LOGIN_PASSWORD_RETYPE,
    AUTH_USER_ATTEMPT,
    AUTH_USER_FAIL,
    AUTH_USER_SUCCESS,
    RESET_APP_STATE,
    FIRST_NAME_CHANGE,
    LAST_NAME_CHANGE,
    AUTH_SIGNOUT_USER,
    ADD_NAME_SUCCESS
  } from '../actions/types';

  const INITIAL_STATE = {
    email: '',
    password: '',
    passwordRetype: '',
    user: null,
    error: '',
    firstName: '',
    lastName: '',
    loading: false
  };

  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOGIN_EMAIL_CHANGE:
        return { ...state, email: action.payload };
      case LOGIN_PASSWORD_RETYPE:
        return { ...state, passwordRetype: action.payload };
      case LOGIN_PASSWORD_CHANGE:
        return { ...state, password: action.payload };
      case FIRST_NAME_CHANGE:
        return { ...state, firstName: action.payload };
      case LAST_NAME_CHANGE:
        return { ...state, lastName: action.payload };
      case AUTH_USER_ATTEMPT:
        return { ...state, error: '', loading: true };
      case AUTH_SIGNOUT_USER:
        return { ...state, loading: true, error: '' };
      case AUTH_USER_FAIL:
        return {
          ...state,
          error: action.payload,
          password: '',
          passwordRetype: '',
          loading: false,
          firstName: '',
          lastName: ''
        };
      case AUTH_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case ADD_NAME_SUCCESS:
        return { ...state, ...INITIAL_STATE };
      case RESET_APP_STATE:
        return INITIAL_STATE;
      default:
        return state;
    }
  }
