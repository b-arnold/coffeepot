import {
    START_TIME,
    ADD_ORDER
} from '../actions/types';

const INITIAL_STATE = {
    time: false,
    drinks: 0
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case START_TIME:
            return { ...state, time: action.payload };
        case ADD_ORDER:
            return { ...state, drinks: action.payload };
        default:
            return state;
    }
}