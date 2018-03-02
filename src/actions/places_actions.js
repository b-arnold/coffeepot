import firebase from 'firebase';
import axios from 'axios';
import { FETCH_PLACES, FETCH_DISTANCE, LOAD_PLACE_DETAILS,  } from './types';
import * as urlBuilder from '../utility/url_builder';

////////////////////////////////////////////////////////////////////////////////////////
// Makes multiple calls to Google Maps APIs to obtain places info.
// Inputs: place (Restaurant Name String), location (Address String)
export const fetchPlaces = ( location ) => async dispatch => {
  // We have lat/long value from user's map locatino - indeed
  // expects city/state or postal code - need to convert

  try {
    // Get the latitude/longitude from city/address using Google Geocode API Service
    // const geocodeUrl = urlBuilder.buildGeocodeUrl(location);
    // const { data } = await axios.get(geocodeUrl);
    // const latLongCoords = data.results[0].geometry.location;
    // console.log(geocodeUrl);
    //console.log(latLongCoords);

    // Get the places using Google Places API Service
    //console.log(latitude);
    //console.log(longitude);
    //console.log(location);
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

    const distanceData = [];

    // console.log(placesData.results);
    // console.log(placesData.results.length);

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

    // Puts the results into one variable
    const placesDataWithSearchRegionAndDistance = { ...placeDataAndDistData, searchRegion };

    
    // Dispatch the action and call the callback function
    dispatch({ type: FETCH_PLACES, payload: placesDataWithSearchRegionAndDistance });
    // console.log(placesDataWithSearchRegion)
  } catch (err) {
    console.error(err);
  }
};

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

// This will load the details of the place that the user has selected
export const loadPlaceDetails = (name, location, place_id, photos) => async dispatch => {
  try {
    //console.log('////////loadPlaceDetail//////////');
    // console.log(name);
    // console.log(location);
    // console.log(place_id);
    // console.log(photos);
    const placeData = {name, location, place_id, photos}
    //console.log(placeData);

    dispatch({ type: LOAD_PLACE_DETAILS, payload: placeData })
  } catch (err) {
    console.error(err);
  }
}
