import { EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, PASSWORD_CHANGED } from '../actions/types';
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
      return {...state, email: action.payload };
    case PASSWORD_CHANGED:
      return {...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, error: '' };
    case LOGIN_USER_FAILED:
      return {...state, password: '',
              // error: action.payload,  
              error: 'Authentication is failed.'
            };
    default:
      return state;
  }
}

export default AuthReducer;
