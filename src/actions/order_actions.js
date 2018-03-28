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


    return(dispatch) => {
        firebase.database().ref(`/orders/`)
        .push({name, location, drink})
        .then(() => {
            dispatch({ type: ORDER_CREATE });
        });
    };
};
