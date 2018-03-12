import {
    START_TIME,
    ADD_ORDER,
    UPDATE_COUNT_DOWN
} from './types.js';

/////////////////////////////////////////////////////////
////  Boolean to start Coffee Pot Timer
export const startTime = time => ({
    type: START_TIME,
    payload: time
});

/////////////////////////////////////////////////////////
//// Adding number of drinks to Coffee Pot
export const addOrder = cup => ({
    type: ADD_ORDER,
    payload: cup
});

/////////////////////////////////////////////////////////
//// Subtracting time from the count down
export const updateCountDown = count => ({
    type: UPDATE_COUNT_DOWN,
    payload: count
});