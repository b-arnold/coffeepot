import firebase from 'firebase';
import {
    ORDER_CHANGE,
    ORDER_CREATE
} from './types';


// Update Order
export const orderChange = text => ({
  type: ORDER_CHANGE,
  payload: text
});

export const orderCreate = ({ name, location, drink }) => {
    return (dispatch) => {
          //Something like /coffeepots/name(which will be the orders inside the cofeepots)
        firebase.database().ref('/coffeePots/')
        .push({ location, drink })
        .then(() => {
            dispatch({ type: ORDER_CREATE });
        });
    };
};
