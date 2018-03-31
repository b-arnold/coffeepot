import firebase from 'firebase';
import {
    ORDER_CHANGE,
    ORDER_CREATE
} from './types';


// Update Order
export const orderUpdate = ({ prop, value }) => {
    console.log(value);
    return {
      type: ORDER_UPDATE,
      payload: { prop, value }
    };
  };


export const orderCreate = ({name, location, drink}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/orders/`)
        .push({name, location, drink})
        .then(() => {
            dispatch({ type: ORDER_CREATE});
        });
    };
};
