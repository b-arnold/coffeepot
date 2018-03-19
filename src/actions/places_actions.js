import firebase from 'firebase';
import axios from 'axios';
import { FETCH_PLACES, FETCH_DISTANCE, LOAD_PLACE_DETAILS,  } from './types';
import * as urlBuilder from '../utility/url_builder';

////////////////////////////////////////////////////////////////////////////////////////
// Makes multiple calls to Google Maps APIs to obtain places info.
// Inputs: place (Restaurant Name String), location (Address String)
export const fetchPlaces = ( location ) => async dispatch => {
  try {
    // Get the places using Google Places API Service
    const placesUrl = urlBuilder.buildPlacesUrl(location);
    const placesResponse = await axios.get(placesUrl);
    const placesData = placesResponse.data;

    // Add the geocoded lat/long to the payload (for use with map)
    const searchRegion = {
      latitude: location.latitude,
      longitude: location.longitude,
      longitudeDelta: 0.04, // Zoom level
      latitudeDelta: 0.09 // Zoom level
    };

    // This will hold the data for the distance from each place from user's location
    const distanceData = [];

    // Finds the distance between the origin and destination and pushes it into an array variable
    for(const i = 0; i < placesData.results.length; i++) {
      const result = await getDistance(location, placesData.results[i].geometry.location)
      distanceData.push(result);
    }

    // Takes the results from distanceData and puts it into one object (will clarify later)
    const placeDataAndDistData = {results: [] };
    for(const i = 0; i < placesData.results.length; i++) {
      const result = Object.assign(distanceData[i], placesData.results[i]);
      placeDataAndDistData.results.push(result);
    }

    // This will arrange the data in the array so that it will be from nearest to farthest by using Merge Sort algorithm
    const sortedData =  {results: [] };
    const sortedResults = await sortData(placeDataAndDistData.results);
    for(const i = 0; i < sortedResults.length; i++) {
      sortedData.results.push(sortedResults[i]);
    }

    // Puts the results into one variable
    // Contains places, directions to places, search region, and sorted data
    const placesDataWithSearchRegionAndDistance = { ...sortedData, searchRegion };

    
    // Dispatch the action and call the callback function
    dispatch({ type: FETCH_PLACES, payload: placesDataWithSearchRegionAndDistance });
  } catch (err) {
    console.error(err);
  }
};

///////////////////////////////////////////////////////////////////////////////
// This will grab the distance of the given origin and destination
// Is called from fetchPlaces
async function getDistance (origin, destination) {
  try {
    const begin = `${origin.latitude},${origin.longitude}`;
    const end = `${destination.lat},${destination.lng}`;
    const directionUrl = urlBuilder.buildDirectionsUrl(origin, destination);
    const directionResponse = await axios.get(directionUrl);
    const directionData = directionResponse.data.routes[0].legs[0];
    return directionData;
  } catch (err) {
    console.error(err);
  }
}

///////////////////////////////////////////////////////////////////////////////
// sortData will sort the places from nearest to farthest (Currently using merge sort algorithm)
// Is called inside fetchPlaces
async function sortData (data) {
  //-----------------Bubble Sort-------------------------
  // for(const i = len-1; i >= 0; i--) {
  //   for(const j = 1; j <= i; j++) {
  //     const num1 = Number(data.results[j-1].text.replace(' mi', ''))
  //     const num2 = Number(data.results[j].text.replace(' mi', ''))
  //     if(num1 > num2) {
  //       const temp = data.results[j-1];
  //       data.results[j-1] = data.results[j]
  //       data.results[j] = temp;
  //     }
  //   }
  // }
  //-----------------------------------------------------
  if (data.length === 1) {
    // return once there is only one item in the array
    return data;
  }

  // middle tells us the middle item of the array rounded down
  const middle = Math.floor(data.length / 2);
  // gets the item on the left side
  const left = data.slice(0, middle);
  // gets the item on the right side
  const right = data.slice(middle);  

  return merge(
    await sortData(left),
    await sortData(right)
  )
}

async function merge (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length) {
    if (Number(left[indexLeft].distance.text.replace(' mi', '')) < Number(right[indexRight].distance.text.replace(' mi', ''))) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  let final = await result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  return final
}

///////////////////////////////////////////////////////////////////////////////
// This will load the details of the place that the user has selected
export const loadPlaceDetails = (name, location, place_id, photos, dist) => async dispatch => {
  try {
    const placeData = {name, location, place_id, photos, dist}

    dispatch({ type: LOAD_PLACE_DETAILS, payload: placeData })
  } catch (err) {
    console.error(err);
  }
}
