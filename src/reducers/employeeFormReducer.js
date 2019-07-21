import { EMPLOYEE_CREATE, EMPLOYEE_CREATE_SUCCESS,  
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE_FAILED } from '../actions/types';

const INITIAL_STATE = {
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
      return { ...state,  ...INITIAL_STATE};
    case EMPLOYEE_CREATE_FAILED:
      return { ...state, saving: false, error: 'Creating an Employee is failed.'};
    case EMPLOYEE_CREATE:
      return { ...state, saving: true, error: ''};
    default:
      return state;
  }
};
