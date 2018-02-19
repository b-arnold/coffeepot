import {
  FETCH_PLACES,
  RESET_APP_STATE
} from '../actions/types';

const INITIAL_STATE = {
  placesResponse: null,
  selectedPlace: null,
  selectedPlaceDetails: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PLACES:
      return { ...state, placesResponse: action.payload };
    case RESET_APP_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
