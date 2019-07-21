import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import EmployeeFormReducer from './employeeFormReducer';
import EmployeesReducer from './employeesReducer';

const combinedReducers = {
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeesReducer
};

export default combineReducers(combinedReducers);
