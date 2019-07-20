import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import EmployeeFormReducer from './employeeFormReducer';

const combinedReducers = {
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
};

export default combineReducers(combinedReducers);
