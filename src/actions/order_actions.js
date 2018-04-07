import firebase from 'firebase';
import {
    ORDER_UPDATE,
    ORDER_CREATE,
    NAME_FETCH_SUCCESS
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

export const orderCreate = ({name, location, drink, time, cost, size}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/orders/`)
        .push({name, location, drink, time, cost, size})
        .then(() => {
            dispatch({ type: ORDER_CREATE});
        });
    };
};


////Cannot update name property on order. Only consolelogs name but nothing more.
export const nameFetch = () => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/name_field/firstName/`)
        .on('value', function(snapshot) {
            var tempName = snapshot.val();
            value = String(tempName);
            if (value === undefined) { 
                console.log('value is undefined'); 
            } else { 
                console.log('name function: ' + value);
                //this.props.orderUpdate({prop: 'name', value}); 
            }
        });
    };
  };
