import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  loading: '',
  error: '',
  user: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMAIL_CHANGED:
      return {...state, ...{ email: action.payload }};
    case PASSWORD_CHANGED:
      return {...state, ...{ password: action.payload }}
    default:
      return state;
  }
}

export default AuthReducer;
