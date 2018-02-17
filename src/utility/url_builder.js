import { Dimensions } from "react-native";
import qs from "qs";
import {
  GOOGLE_PLACES_ROOT_URL,
  GOOGLE_GEOCODE_ROOT_URL,
} from "../constants/google_api";
import { GOOGLE_PLACES_API_KEY } from "../constants/api_keys";

////////////////////////////////////////////////////////////////////////////////////////
// Build Google Places URL according to: https://developers.google.com/maps/documentation/geocoding/start
export const buildGeocodeUrl = location => {
  const query = qs.stringify({ address: location, ...GEOCODE_QUERY_PARAMS });
  // console.log(query);
  // console.log(`${GOOGLE_GEOCODE_ROOT_URL}${query}`);
  return `${GOOGLE_GEOCODE_ROOT_URL}${query}`;
};
const GEOCODE_QUERY_PARAMS = {
  key: GOOGLE_PLACES_API_KEY
};

////////////////////////////////////////////////////////////////////////////////////////
// Build Google Places URL according to: https://developers.google.com/places/web-service/
export const buildPlacesUrl = ( latLongCoords) => {
  const { lat, lng } = latLongCoords;
  const coords = `${lat},${lng}`;
  const query = qs.stringify({ location: coords, ...PLACE_QUERY_PARAMS });
  // console.log(coords);
  // console.log(query);
  return `${GOOGLE_PLACES_ROOT_URL}${query}`;
};
const PLACE_QUERY_PARAMS = {
  key: GOOGLE_PLACES_API_KEY,
  types: "cafe",
  radius: "10000" // In meters (max 50000)
};
