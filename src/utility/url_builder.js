import { Dimensions } from "react-native";
import qs from "qs";
import {
  GOOGLE_PLACES_ROOT_URL,
  GOOGLE_PLACES_PHOTO_ROOT_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
} from "../constants/google_api";
import { GOOGLE_PLACES_API_KEY, GOOGLE_MAPS_DIRECTIONS_API } from "../constants/api_keys";

// Lets the api know what to search for the places query
const PLACE_QUERY_PARAMS = {
  key: GOOGLE_PLACES_API_KEY,
  types: 'cafe',
  radius: '1000' // In meters (max 50000)
};

////////////////////////////////////////////////////////////////////////////////////////
// Build Google Places URL according to: https://developers.google.com/places/web-service/
export const buildPlacesUrl = ( location ) => {
  const { latitude, longitude } = location;
  const coords = `${latitude},${longitude}`;
  //console.log(latitude);
  //console.log(longitude);
  const query = qs.stringify({ location: coords, ...PLACE_QUERY_PARAMS });
  //console.log(coords);
  //console.log(`${GOOGLE_PLACES_ROOT_URL}${query}`)
  //console.log(query);
  return `${GOOGLE_PLACES_ROOT_URL}${query}`;
};

////////////////////////////////////////////////////////////////////////////////////////
// Build Google Places Photo URL wrt: https://developers.google.com/places/web-service/photos
export const buildPlacesPhotoUrl = (photoRef, width = SCREEN_WIDTH) => {
  const query = qs.stringify({
    ...PLACE_PHOTO_QUERY_PARAMS,
    photoreference: photoRef,
    maxwidth: width
  });
  //console.log(`${GOOGLE_PLACES_PHOTO_ROOT_URL}${query}`);
  return `${GOOGLE_PLACES_PHOTO_ROOT_URL}${query}`;
};
const PLACE_PHOTO_QUERY_PARAMS = {
  key: GOOGLE_PLACES_API_KEY
};
const SCREEN_WIDTH = Dimensions.get("window").width;

////////////////////////////////////////////////////////////////////////////////////////
// Build Google Places Photo URL wrt: https://developers.google.com/maps/documentation/directions/start
export const buildDirectionsUrl = (start, end) => {
  //console.log('////////Build Directions Url///////////');
  //console.log(start);
  const startCoords = `${start.latitude},${start.longitude}`;
  const endCoords = `${end.lat},${end.lng}`;
  const query = qs.stringify({
      origin: startCoords,
      destination: endCoords,
      ...DIRECTIONS_QUERY_PARAMS,
  });
  //console.log(`${GOOGLE_MAPS_DIRECTIONS_URL}${query}`);
  return `${GOOGLE_MAPS_DIRECTIONS_URL}${query}`;
};

const DIRECTIONS_QUERY_PARAMS = {
  key: GOOGLE_MAPS_DIRECTIONS_API
};