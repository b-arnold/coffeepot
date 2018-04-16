import firebase from 'firebase';
import {
    ORDER_CREATE,
    ORDER_NAME_CHANGE,
    ORDER_INSTRUCTION_CHANGE,
    ORDER_ID_CHANGE
} from './types';


export const orderIDChange = text => ({
  type: ORDER_ID_CHANGE,
  payload: text
});

export const specialInstructionsChange = text => ({
  type: ORDER_INSTRUCTION_CHANGE,
  payload: text
});


export const drinkNameChange = text => ({
  type: ORDER_NAME_CHANGE,
  payload: text
});

export const createOrder = (drinkName, specialInstructions, orderID) => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    const ref = firebase.database().ref();
    let keyID = {};
    await ref.child('coffeePots').once('value', function(snapshot) {
      snapshot.forEach(function (child) {
        const coffeePot = JSON.parse(JSON.stringify(child));
        if (coffeePot.deliverer.uid === orderID) {
          keyID = child.key;
          firebase.database().ref(`/coffeePots/${keyID}/orders/${currentUser.uid}`)
          .set({ drinkName, specialInstructions });
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const orderCreate = ({ name, location, drink }) => {
    return (dispatch) => {
        firebase.database().ref(`/orders/`)
        .push({ name, location, drink })
        .then(() => {
            dispatch({ type: ORDER_CREATE });
        });
    };
};
