import { combineReducers } from 'redux';
import AuthReducer from './authReducer';

const combinedReducers = {
  auth: AuthReducer
};

export default combineReducers(combinedReducers);
