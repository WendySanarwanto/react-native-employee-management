import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: null,
  phone: null,
  shift: null
};

export default EmployeeFormReducer = (state = INITIAL_STATE, action) => {  
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      const updatedState = { ...state, [action.payload.prop]: action.payload.value };
      // console.log(`[DEBUG]<EmployeeFormReducer> updatedState: \n`, updatedState);
      return updatedState;
    default:
      return state;
  }
};
