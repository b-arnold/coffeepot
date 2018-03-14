import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import CoffeePotReducer from './coffeepot_reducer';
import PlacesReducer from './places_reducer';
<<<<<<< HEAD
import ProfileReducer from './profile_reducer';
=======
import OrderReducer from './order_reducer';
>>>>>>> Richard-Temp

////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth: AuthReducer,
  coffee: CoffeePotReducer,
  places: PlacesReducer,
<<<<<<< HEAD
  prof: ProfileReducer
=======
  order: OrderReducer
>>>>>>> Richard-Temp
});
