import {
  FETCH_PLACES,
  FETCH_DISTANCE,
  LOAD_PLACE_DETAILS,
  RESET_PLACE_STATE
} from '../actions/types';

const INITIAL_STATE = {
  placesResponse: null,
  selectedPlace: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PLACES:
      return { ...state, placesResponse: action.payload };
    case LOAD_PLACE_DETAILS:
      return {
        ...state, selectedPlace: action.payload }
    case RESET_PLACE_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
