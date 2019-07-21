import { EMPLOYEE_CREATE, EMPLOYEE_CREATE_SUCCESS,  
  LOGIN_USER_FAILED, EMPLOYEE_UPDATE, EMPLOYEE_CREATE_FAILED } from '../actions/types';

const INITIAL_STATE = {
  id: null,
  name: null,
  phone: null,
  shift: null,
  saving: false,
  error: null
};

export default EmployeeFormReducer = (state = INITIAL_STATE, action) => {  
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      const updatedState = { ...state, [action.payload.prop]: action.payload.value };
      // console.log(`[DEBUG]<EmployeeFormReducer> updatedState: \n`, updatedState);
      return updatedState;
    case EMPLOYEE_CREATE_SUCCESS:
      return { ...state,  id: '', name: '', phone: '', shift: null, saving: false, error: ''};
    case EMPLOYEE_CREATE_FAILED:
      return { ...state, saving: false, error: 'Creating an Employee is failed.'};
    case EMPLOYEE_CREATE:
      return { ...state, saving: true, error: ''};
    default:
      return state;
  }
};
