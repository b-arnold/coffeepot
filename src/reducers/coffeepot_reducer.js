import {
    START_TIME,
    ADD_ORDER,
    UPDATE_COUNT_DOWN,
    CREATE_COFFEE_POT_SUCCESS,
    SET_TIMER,
    FETCH_COFFEE_POTS,
} from '../actions/types';

const INITIAL_STATE = {
    timer: 5,
    hasCoffeePot: false,
    drinks: 0,
    countDown: 60000,
    coffeePots: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case START_TIME:
            return { ...state, time: action.payload };
        case ADD_ORDER:
            return { ...state, drinks: action.payload };
        case UPDATE_COUNT_DOWN:
            return { ...state, countDown: action.payload };
        case CREATE_COFFEE_POT_SUCCESS:
            return { ...state, hasCoffeePot: true };
        case SET_TIMER: 
            return { ...state, timer: action.payload};
        case FETCH_COFFEE_POTS:
            return { ...state, coffeePots: action.payload};
        default:
            return state;
    }
}