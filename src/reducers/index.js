import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';

////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth: AuthReducer
});
