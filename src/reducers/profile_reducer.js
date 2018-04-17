/*
  Profile Reducer
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/

import {
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  GET_CURRENT_USER
} from "../actions/types";

const INITIAL_STATE = {
  firstName: "",
  lastName: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FIRST_NAME_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastName: action.payload };
    case GET_CURRENT_USER:
      return { ...state };
    default:
      return state;
  }
}
