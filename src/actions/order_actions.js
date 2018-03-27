import firebase from 'firebase';
import {
    ORDER_UPDATE,
    ORDER_CREATE
    //ORDER_FETCH_SUCCESS,
    //ORDER_SAVE_SUCCESS
} from './types';

// export const locationUpdate = ({ vicinity, place_id }) => {
//     const placeData = {vicinity, place_id}
//     console.log(placeData);
//     return {
//         type: ORDER_UPDATE,
//         payload: placeData
//     };
// };
export const orderUpdate = ({ prop, value }) => {
   // console.log(value + "orderUpdate");
    return {
      type: ORDER_UPDATE,
      payload: { prop, value }
    };
  };

export const orderCreate = ({name, location, drink, time, cost}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/coffeePots/`)
        .push({name, location, drink, time, cost})
        .then(() => {
            dispatch({ type: ORDER_CREATE});
        });
    };
};
