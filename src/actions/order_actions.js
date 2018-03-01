import firebase from 'firebase';
import {
    ORDER_UPDATE,
    ORDER_CREATE
    //ORDER_FETCH_SUCCESS,
    //ORDER_SAVE_SUCCESS
} from './types';

export const orderUpdate = ({prop, value}) => {
    return {
        type: ORDER_UPDATE,
        payload: { prop, value}
    };
};

export const orderCreate = ({name, location, drink}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/coffeePots/`)
        .push({name, location, drink})
        .then(() => {
            dispatch({ type: ORDER_CREATE});
        });
    };
};
