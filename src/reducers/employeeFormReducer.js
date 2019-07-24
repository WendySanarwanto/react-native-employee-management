import { EMPLOYEE_CREATE, EMPLOYEE_CREATE_SUCCESS,  
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE_FAILED,
  EMPLOYEE_SAVE, EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_SAVE_FAILED, EMPLOYEE_RESET,
  EMPLOYEE_DELETE, EMPLOYEE_DELETE_FAILED, 
  EMPLOYEE_DELETE_SUCCESS} from '../actions/types';

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
    case EMPLOYEE_RESET:
    case EMPLOYEE_DELETE_SUCCESS:
    case EMPLOYEE_CREATE_SUCCESS:
    case EMPLOYEE_SAVE_SUCCESS:
      return { ...state,  ...INITIAL_STATE};
    case EMPLOYEE_SAVE_FAILED:
        return { ...state, saving: false, error: 'Updating an Employee is failed.'};
    case EMPLOYEE_CREATE_FAILED:
      return { ...state, saving: false, error: 'Creating an Employee is failed.'};
    case EMPLOYEE_DELETE_FAILED:
      return { ...state, saving: false, error: 'Deleting an Employee is failed.'};
    case EMPLOYEE_CREATE:
    case EMPLOYEE_DELETE:
    case EMPLOYEE_SAVE:
      return { ...state, saving: true, error: ''}
    default:
      return state;
  }
};
