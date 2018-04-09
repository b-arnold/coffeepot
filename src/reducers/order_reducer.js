import {
    ORDER_CHANGE,
    ORDER_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    location: '',
    selectedPlace: null,
    order: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ORDER_CHANGE:
          return { ...state, order: action.payload };
        case ORDER_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
