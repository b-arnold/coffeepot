import {
    START_TIME,
    ADD_ORDER,
    UPDATE_COUNT_DOWN
} from '../actions/types';

const INITIAL_STATE = {
    time: false,
    drinks: 0,
    countDown: 60000
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case START_TIME:
            return { ...state, time: action.payload };
        case ADD_ORDER:
            return { ...state, drinks: action.payload };
        case UPDATE_COUNT_DOWN:
            return { ...state, countDown: action.payload };
        default:
            return state;
    }
}