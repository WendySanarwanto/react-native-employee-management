import { EMPLOYEE_FETCH, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_FETCH_FAILED } from '../actions/types';

const INITIAL_STATE = {
  error: null,
  loading: false,
  data: []
};

export default EmployeesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH:
      return { ...state, loading: true, error: null };
    case EMPLOYEE_FETCH_SUCCESS:
      const updatedState = { ...state, loading: false, data: [...new Set( [...state.data, ...action.payload])]};
      console.log(`[DEBUG]<EMPLOYEE_FETCH_SUCCESS> updatedState: \n`, updatedState);
      return updatedState;
    case EMPLOYEE_FETCH_FAILED:
      return { ...state, loading: false, error: 'Loading Employees list is failed.'};
    default:
      return state;
  }
};
