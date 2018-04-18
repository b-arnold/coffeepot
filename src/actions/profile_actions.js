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
export const profileFirstNameChange = () => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    let result = '';
    await firebase.database().ref(`users/${currentUser.uid}/name_field/firstName`)
        .on('value', snapshot => {
          dispatch({ type: FIRST_NAME_CHANGED, payload: snapshot.val() })
        });    
  } catch (err) {
    console.error(err);
  }
}

// Called when last name is Changed
export const profileLastNameChange = () => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    const result = '';
    await firebase.database().ref(`users/${currentUser.uid}/name_field/lastName`)
        .on('value', snapshot => {
          dispatch({ type: LAST_NAME_CHANGED, payload: snapshot.val() })
        });
  } catch (err) {
    console.error(err);
  }
}
