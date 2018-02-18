import { Dimensions } from "react-native";
import qs from "qs";
import {
  GOOGLE_PLACES_ROOT_URL,
  GOOGLE_GEOCODE_ROOT_URL,
} from "../constants/google_api";
import { GOOGLE_PLACES_API_KEY } from "../constants/api_keys";

////////////////////////////////////////////////////////////////////////////////////////
// Build Google Places URL according to: https://developers.google.com/places/web-service/
export const buildPlacesUrl = ( location ) => {
  const { latitude, longitude } = location;
  const coords = `${latitude},${longitude}`
  console.log(latitude);
  console.log(longitude);
  const query = qs.stringify({ location: coords, ...PLACE_QUERY_PARAMS });
  //console.log(coords);
  console.log(`${GOOGLE_PLACES_ROOT_URL}${query}`)
  console.log(query);
  return `${GOOGLE_PLACES_ROOT_URL}${query}`;
};
const PLACE_QUERY_PARAMS = {
  key: GOOGLE_PLACES_API_KEY,
  types: 'cafe',
  radius: '1000' // In meters (max 50000)
};
