import { EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, 
  LOGIN_USER, PASSWORD_CHANGED } from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMAIL_CHANGED:
      return {...state, email: action.payload };
    case PASSWORD_CHANGED:
      return {...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, error: '', loading: false };
    case LOGIN_USER_FAILED:
      return {...state, password: '',
              // error: action.payload,  
              error: 'Authentication is failed.', loading: false };
    case LOGIN_USER:
      return {...state, loading: true, error: ''}
    default:
      return state;
  }
}

export default AuthReducer;
