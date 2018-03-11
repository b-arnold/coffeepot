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

    const holder = null;
    for(const i =0; i < placeDataAndDistData.length; i++) {
      if(holder === null) {
        placesDataAndDistData
      }
    }

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
