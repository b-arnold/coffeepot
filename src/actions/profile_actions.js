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
  PROFILE_IMAGE_CHANGED
} from "./types.js";

// Called when first name is Changed
export const profileFirstNameChange = () => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    let result = "";
    await firebase
      .database()
      .ref(`users/${currentUser.uid}/name_field/firstName`)
      .on("value", snapshot => {
        dispatch({ type: FIRST_NAME_CHANGED, payload: snapshot.val() });
      });
  } catch (err) {
    console.error(err);
  }
};

// Called to update Last Name
export const setFirstName = firstName => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    await firebase
      .database()
      .ref(`users/${currentUser.uid}/name_field/firstName`)
      .set(firstName);
  } catch (err) {
    console.error(err);
  }
};

// Called when last name is Changed
export const profileLastNameChange = () => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    const result = "";
    await firebase
      .database()
      .ref(`users/${currentUser.uid}/name_field/lastName`)
      .on("value", snapshot => {
        dispatch({ type: LAST_NAME_CHANGED, payload: snapshot.val() });
      });
  } catch (err) {
    console.error(err);
  }
};

// Called to update Last Name
export const setLastName = lastName => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    await firebase
      .database()
      .ref(`users/${currentUser.uid}/name_field/lastName`)
      .set(lastName);
  } catch (err) {
    console.error(err);
  }
};

// Called when Profile Pic is set in App
export const profileImageChanged = () => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    const result = "";
    await firebase
      .database()
      .ref(`users/${currentUser.uid}/profile_image`)
      .on("value", snapshot => {
        dispatch({ type: PROFILE_IMAGE_CHANGED, payload: snapshot.val() });
      });
  } catch (err) {
    console.error(err);
  }
};

// Called to update Profile Pic
export const setProfileImage = profileImage => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    await firebase
      .database()
      .ref(`users/${currentUser.uid}/profile_image`)
      .set(profileImage);
  } catch (err) {
    console.error(err);
  }
};
