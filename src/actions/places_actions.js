import firebase from 'firebase';
import axios from 'axios';
import { FETCH_PLACES } from './types';
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
    const placesDataWithSearchRegion = { ...placesData, searchRegion };

    // Dispatch the action and call the callback function

    dispatch({ type: FETCH_PLACES, payload: placesDataWithSearchRegion });
    // console.log(placesDataWithSearchRegion)
  } catch (err) {
    console.error(err);
  }
};
