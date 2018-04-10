import {
    START_TIME,
    ADD_ORDER,
    UPDATE_COUNT_DOWN,
    CREATE_COFFEE_POT_SUCCESS,
    SET_TIMER,
    FETCH_COFFEE_POTS,
    FETCH_MY_COFFEE_POT,
    REMOVE_MY_COFFEE_POT,
    RESET_COFFEE_STATE,
    LOAD_COFFEE_POT_DETAILS
} from '../actions/types';

const INITIAL_STATE = {
    timer: 5,
    hasCoffeePot: false,
    drinks: 0,
    countDown: 60000,
    coffeePots: null,
    myCoffeePot: null,
    selectedCoffeePot: null
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
        case FETCH_MY_COFFEE_POT:
            return { ...state, myCoffeePot: action.payload};
        case REMOVE_MY_COFFEE_POT:
            return { ...state, myCoffeePot: null, hasCoffeePot: false};
        case LOAD_COFFEE_POT_DETAILS:
            return { ...state, selectedCoffeePot: action.payload };
        case RESET_COFFEE_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}