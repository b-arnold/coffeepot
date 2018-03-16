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

    // (WIP) This will arrange the data in the array so that it will be from nearest to farthest
    const sortedData =  null;
    sortedData = await sortData(placeDataAndDistData);

    // Puts the results into one variable
    const placesDataWithSearchRegionAndDistance = { ...placeDataAndDistData, searchRegion };

    
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
    const directionData = directionResponse.data.routes[0].legs[0].distance;
    return directionData;
  } catch (err) {
    console.error(err);
  }
}

async function sortData (data) {
  console.log('-----Entered Sort Data-----');
  const len = data.results.length;
  console.log('-----Found Length-----');
  for(const i = len-1; i >= 0; i--) {
    console.log('-----Entered First Loop-----');
    for(const j = 1; j <= i; j++) {
      console.log('-----Entered Second Loop-----');
      const num1 = Number(data.results[j-1].text.replace(' mi', ''))
      const num2 = Number(data.results[j].text.replace(' mi', ''))
      if(num1 > num2) {
        console.log('sort');
        const temp = data.results[j-1];
        data.results[j-1] = data.results[j]
        data.results[j] = temp;
      }
    }
  }
  return data;
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
