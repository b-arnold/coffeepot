import firebase from 'firebase';

import {
  FETCH_LAT
} from '../actions/types';

const INITIAL_STATE = {
  coffePot: {
    location: {
      lat: '',
      lng: ''
    },
    name: ''
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LAT:
      return {
        ...state,
        coffeePot: {
          location: {
            lat: action.payload,
            ...state.lng
          },
          ...state.name
        }
      };
    default:
      return state;
  }
}
