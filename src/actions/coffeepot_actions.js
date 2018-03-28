import firebase from 'firebase';
import axios from 'axios';
import {
    START_TIME,
    ADD_ORDER,
    UPDATE_COUNT_DOWN,
    CREATE_COFFEE_POT,
    SET_TIMER,
    CREATE_COFFEE_POT_SUCCESS,
    FETCH_COFFEE_POTS,
    FETCH_MY_COFFEE_POT,
    REMOVE_MY_COFFEE_POT
} from './types.js';
import * as urlBuilder from '../utility/url_builder';

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

////////////////////////////////////s/////////////////////
//// Subtracting time from the count down
export const updateCountDown = count => ({
    type: UPDATE_COUNT_DOWN,
    payload: count
});

///////////////////////////////////////////////////////////////////////////////
// (WIP) This will push to the database a coffee pot at a location with a timer
// Must make it so that only one user can create one coffee pot
export const createCoffeePot = (locDetails, timer) => async dispatch => {
    try {
        const { currentUser } = firebase.auth();
        const deliverer = null;
        const orders = []
        await firebase.database().ref(`/users/${currentUser.uid}/name_field`).once('value').then(function(snapshot) {
            deliverer = {name: snapshot.val(), uid: currentUser.uid};
        })

        await firebase.database().ref('/coffeePots/')
            .push({deliverer, locDetails, timer, orders})
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
export const fetchCoffeePots = (currLoc) => async dispatch => {
    try {
        const coffeePots = { results: [] }
        const ref = firebase.database().ref();
        //const response = { result: [] };

        // This will get all the coffee pots from the database (Subject to change)
        await ref.child('coffeePots').once('value', function(snapshot) {
            snapshot.forEach(function(child) {
                // const uids = JSON.parse(JSON.stringify(child.key));
                // console.log(uids);
                // response = JSON.parse(JSON.stringify(child));
                // console.log(response);
                // const result = Object.assign(uids, response)
                // console.log(result);
                coffeePots.results.push(child);
            })
        })
        
        // Holds the distance results from you to each coffee place
        const distanceData = [];
        // This will remove coffee pots that are more than a mile from your location
        for(const i = 0; i < coffeePots.results.length; i++) {
            const dest = JSON.parse(JSON.stringify(coffeePots.results[i]));
            const result = await getDistance(currLoc, dest.locDetails.geometry.location)
            distanceData.push(result);
        }

        // Takes the results from distanceData and puts it into one object (will clarify later)
        const coffeePotsAndDistData = { results: [] };
        for(const i = 0; i < coffeePots.results.length; i++) {
            // NOTE: Object.assign(distanceData[i]) , coffeePots.results[i]) does not work. Issue something about enumerable values with coffeePots.results
            const result = Object.assign(distanceData[i], JSON.parse(JSON.stringify(coffeePots.results[i])));
            coffeePotsAndDistData.results.push(result);
        }
        
        // This will check if the coffee pots are within 1 mile of the current user
        // NOTE: array.splice(index, numToDelete) did not work
        const filteredCoffeePots = { results: [] };
        for(const i = 0; i < coffeePotsAndDistData.results.length; i++) {
            if( Number(coffeePotsAndDistData.results[i].text.replace(' mi', '')) < 1.0) {
                filteredCoffeePots.results.push(coffeePotsAndDistData.results[i]);
            }
        }
        dispatch({ type: FETCH_COFFEE_POTS, payload: filteredCoffeePots})
    } catch (err) {
        console.error(err)
    }
}

///////////////////////////////////////////////////////////////////////////////
// This will grab the distance of the given origin and destination
// Is called from "fetchCoffeePots()"
async function getDistance (origin, destination) {
    try {
      const begin = `${origin.latitude},${origin.longitude}`;
      const end = `${destination.lat},${destination.lng}`;
      const directionUrl = urlBuilder.buildDirectionsUrl(origin, destination);
      const directionResponse = await axios.get(directionUrl);
      const directionData = directionResponse.data.routes[0].legs[0].distance;
      return directionData;
    } catch (err) {
      console.error(err);
    }
  }

///////////////////////////////////////////////////////////////////////////////
// This will get the user's coffee pot for the 'HomeScreen.js'
export const fetchMyCoffeePot = (uid) => async dispatch => {
    try {
        const ref = firebase.database().ref();
        const response = { results: [] };
        const myCoffeePot = null;
        await ref.child('coffeePots').once('value', function(snapshot){
            snapshot.forEach(function(child){
               response.results.push(child);
            }) 
        })
        for(const i = 0; i < response.results.length; i++) {
            const coffeePot = JSON.parse(JSON.stringify(response.results[i]));
            if(coffeePot.deliverer.uid === uid) {
                myCoffeePot = JSON.parse(JSON.stringify(response.results[i]));
            }
        }
        dispatch({ type: FETCH_MY_COFFEE_POT, payload: myCoffeePot });
    } catch(err) {
        console.error(err);
    }
}

export const removeMyCoffeePot = () => async dispatch => {
    try {
        const { currentUser } = firebase.auth();
        const ref = firebase.database().ref();
        const response = null;
        const removed = false;
        
        await ref.child('coffeePots').once('value', function(snapshot){
            snapshot.forEach(function(child){
                response = JSON.parse(JSON.stringify(child));
                const uid = response.deliverer.uid;
                if(currentUser.uid === uid) {
                    console.log('removed ' + uid);
                    ref.child(`coffeePots/${child.key}`).remove();
                    removed = true;
                }
            })
        })

        if(removed === true) {
            dispatch({ type: REMOVE_MY_COFFEE_POT})
        }
    } catch (err) {
        console.error(err);
    }
}