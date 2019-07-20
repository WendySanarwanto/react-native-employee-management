import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: null,
  phone: null,
  shift: null
};

export default EmployeeFormReducer = (state = INITIAL_STATE, action) => {
  console.log(`[DEBUG]<EmployeeFormReducer> state: \n`, state);
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
