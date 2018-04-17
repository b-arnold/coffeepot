/*
  Profile Reducer
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/

import firebase from "firebase";
import axios from "axios";
import {
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  GET_CURRENT_USER
} from "./types.js";

// Called when first name is Changed
export const profileFirstNameChange = text => ({
  type: FIRST_NAME_CHANGED,
  payload: text
});

// Called when last name is Changed
export const profileLastNameChange = text => ({
  type: LAST_NAME_CHANGED,
  payload: text
});

// Called to get current user information
export const getCurrentUser = () => async dispatch => {
  try {
    const { currentUser } = await firebase.auth();
    console.log(currentUser);
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/name_field`)
      .once("value")
      .then(function(snapshot) {
        // this.props.profileFirstNameChange(snapshot.val());
        // this.props.profileLasttNameChange(snapshot.val());
        console.log(snapshot.val());
      });

    dispatch({ type: GET_CURRENT_USER });
  } catch (e) {
    console.log(e);
  }
};
