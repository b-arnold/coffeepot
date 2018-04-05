/*
  Auth Actions
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import firebase from 'firebase';
import {
  LOGIN_EMAIL_CHANGE,
  LOGIN_PASSWORD_CHANGE,
  LOGIN_PASSWORD_RETYPE,
  AUTH_USER_ATTEMPT,
  AUTH_USER_FAIL,
  AUTH_USER_SUCCESS,
  RESET_AUTH_STATE,
  FIRST_NAME_CHANGE,
  LAST_NAME_CHANGE,
  RESET_COFFEE_STATE,
  RESET_ORDER_STATE,
  RESET_PLACE_STATE,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED
} from './types.js';

////////////////////////////////////////////////////////////////
// Called when email is changed
export const firstNameChange = (text) => async dispatch => {
  dispatch({ type: FIRST_NAME_CHANGE, payload: text });
  dispatch({ type: FIRST_NAME_CHANGED, payload: text })
}

////////////////////////////////////////////////////////////////
// Called when email is changed
export const lastNameChange = (text) => async dispatch => {
  dispatch({ type: LAST_NAME_CHANGE, payload: text });
  dispatch({ type: LAST_NAME_CHANGED, payload: text })
}


////////////////////////////////////////////////////////////////
// Called when email is changed
export const passwordRetypeChange = text => ({
  type: LOGIN_PASSWORD_RETYPE,
  payload: text
});

////////////////////////////////////////////////////////////////
// Called when email is changed
export const emailChange = text => ({
  type: LOGIN_EMAIL_CHANGE,
  payload: text
});

////////////////////////////////////////////////////////////////
// Called when password is changed
export const passwordChange = text => {
  return {
    type: LOGIN_PASSWORD_CHANGE,
    payload: text
  };
};

////////////////////////////////////////////////////////////////
// Called when login is pressed
export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch({ type: AUTH_USER_ATTEMPT });
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    authUserSuccess(dispatch, user);
  } catch (err) {
    loginUserFail(dispatch, err.code);
  }
};

////////////////////////////////////////////////////////////////
// on successful login helper method
const authUserSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_USER_SUCCESS,
    payload: user
  });

  //should this be return? possible error
  this.props.navigation.navigate('Home');
};

////////////////////////////////////////////////////////////////
// on failed login helper METHODS
const loginUserFail = (dispatch, error = '') => {
  dispatch({
    type: AUTH_USER_FAIL,
    payload: error
  });
};
////////////////////////////////////////////////////////////////
//
export const resetSignupLoginPages = () => ({
  type: RESET_AUTH_STATE
});

////////////////////////////////////////////////////////////////
// Call appropriate FireBase method to signup user
export const signupUser = (email, password, passwordRetype, firstName, lastName) => async dispatch => {
  try {
    // Dispatch event to trigger loading spinner
    dispatch({ type: AUTH_USER_ATTEMPT });

    if (password !== passwordRetype) {
      return loginUserFail(dispatch, 'Passwords do not match');
    }

    //Need to do a email verifcation function here

    // Attempt to signup new user
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const { currentUser } = firebase.auth();

    // push first and lastname to the database during account creation
    await firebase.database().ref(`/users/${currentUser.uid}/name_field/`)
      // .set allows no uid after /name_field/ easier for grabing data
      .set({ firstName, lastName })
      .then(() => {
        authUserSuccess(dispatch, user);
      });
  } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':
        return loginUserFail(
          dispatch,
          `${email} already in use - Please try anothere-mail address or log in with a social media provider`
        );
      case 'auth/invalid-email':
        return loginUserFail(
          dispatch,
          `${email} is an invalid email address - Please ensure you typed your e-mail correctly`
        );
      case 'auth/weak-password':
        return loginUserFail(dispatch, 'Password is too weak - Please try again.');
      default:
        // console.log(err.message);
        return loginUserFail(dispatch, err.message);
    }
  }
  // First last name needs to be added to user.
};

////////////////////////////////////////////////////////////////
// CAlled when user needs to be signed out
export const signoutUser = () => async dispatch => {
  try {
    dispatch({ type: AUTH_USER_ATTEMPT });
    await firebase.auth().signOut();
    dispatch({ type: RESET_AUTH_STATE });
    dispatch({ type: RESET_COFFEE_STATE });
    dispatch({ type: RESET_ORDER_STATE });
    dispatch({ type: RESET_PLACE_STATE });
  } catch (err) {
    console.error(err);
  }
};
