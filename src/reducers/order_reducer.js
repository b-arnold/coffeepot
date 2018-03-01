import {
    ORDER_UPDATE,
    ORDER_CREATE
}   from '../actions/types';

const INITIAL_STATE = {
    name: '',
    location: '',
    drink: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ORDER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value};
        case ORDER_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};