import firebase from 'firebase';
import {
    START_TIME,
    ADD_ORDER,
    UPDATE_COUNT_DOWN,
    CREATE_COFFEE_POT,
    SET_TIMER,
    GET_TIMER,
    CREATE_COFFEE_POT_SUCCESS,
    FETCH_COFFEE_POTS
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

///////////////////////////////////////////////////////////////////////////////
// (WIP) This will push to the database a coffee pot at a location with a timer
// Must make it so that only one user can create one coffee pot
export const createCoffeePot = (location, timer) => async dispatch => {
    try {
        const { currentUser } = firebase.auth();
        const deliverer = null;
        const orders = [{numOrders: 0}]
        await firebase.database().ref(`/users/${currentUser.uid}/name_field`).once('value').then(function(snapshot) {
            deliverer = snapshot.val();
        })

        await firebase.database().ref('/coffeePots/')
            .push({deliverer, location, timer, orders})
        dispatch({type: CREATE_COFFEE_POT_SUCCESS})
    } catch (err) {
        console.error(err);
    }
  }

///////////////////////////////////////////////////////////////////////////////
// Sets the timer
export const setTimer = (time) => async dispatch => {
    try {
        dispatch({ type: SET_TIMER, payload: time });
    } catch (err) {
        console.error(err);
    }
}

///////////////////////////////////////////////////////////////////////////////
// This will fetch the existing coffee pots in the database and put them on the CoffeePotGPS map
export const fetchCoffeePots = (location) => async dispatch => {
    try {
        const coffeePots = { results: [] }
        const ref = firebase.database().ref();
        const response = null;

        await ref.child('coffeePots').once('value', function(snapshot) {
            snapshot.forEach(function(child) {
                response = child;
                console.log(response);
                Object.defineProperty(response, 'key', {
                    uid: child.key,
                    enumerable: false
                })
                console.log(response);
                coffeePots.results.push(response);
            })
        })
        //dispatch({ type: FETCH_COFFEE_POTS, payload: })
    } catch (err) {
        console.error(err)
    }
}