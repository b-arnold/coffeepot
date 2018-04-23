import firebase from "firebase";
import {
  ORDER_CREATE,
  ORDER_UPDATE,
  ORDER_NAME_CHANGE,
  ORDER_INSTRUCTION_CHANGE,
  ORDER_ID_CHANGE,
  ORDER_RESET_FORUM
} from "./types";

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

export const createStandAloneOrder = (drinkName, specialInstructions, region) => async dispatch => {
  const time = Date.now();
  try {
    const { currentUser } = firebase.auth();
    await firebase.database().ref(`/orders/${currentUser.uid}/`)
      .set({ drinkName, specialInstructions, time, region })
      .then(
        dispatch({ type: ORDER_RESET_FORUM })
      );
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = (
  drinkName,
  specialInstructions,
  orderID
) => async dispatch => {
  try {
    const { currentUser } = firebase.auth();
    const ref = firebase.database().ref();
    let keyID = {};
    await ref.child("coffeePots").once("value", function(snapshot) {
      snapshot.forEach(function(child) {
        const coffeePot = JSON.parse(JSON.stringify(child));
        if (coffeePot.deliverer.uid === orderID) {
          keyID = child.key;
          firebase
            .database()
            .ref(`/coffeePots/${keyID}/orders/${currentUser.uid}`)
            .set({ drinkName, specialInstructions });
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const orderUpdate = ({ prop, value }) => {
  // console.log(value + "orderUpdate");
  return {
    type: ORDER_UPDATE,
    payload: { prop, value }
  };
};

export const orderCreate = ({
  name,
  location,
  drink,
  time,
  cost,
  size,
  card
}) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/orders/`)
      .push({ name, location, drink, time, cost, size, card })
      .then(() => {
        dispatch({ type: ORDER_CREATE });
      });
  };
};

////Cannot update name property on order. Only consolelogs name but nothing more.
export const nameFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/name_field/firstName/`)
      .on("value", function(snapshot) {
        var tempName = snapshot.val();
        value = String(tempName);
        if (value === undefined) {
          console.log("value is undefined");
        } else {
          console.log("name function: " + value);
          //this.props.orderUpdate({prop: 'name', value});
        }
      });
  };
};
