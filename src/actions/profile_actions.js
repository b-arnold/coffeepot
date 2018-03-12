/*
  Profile Reducer
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/

import firebase from 'firebase';
import {
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED
} from './types.js';

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
