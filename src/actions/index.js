import firebase from 'firebase';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILED, LOGIN_USER } from './types';

function textChanged(text, actionType) {
  return {
    type: actionType,
    payload: text
  }
}

export const emailChanged = email => {
  return textChanged(email, EMAIL_CHANGED);
};

export const passwordChanged = password => {
  return textChanged(password, PASSWORD_CHANGED);
}

function loginUserSuccess(dispatch, user){
  console.log(`[DEBUG]<loginUserFail> user: \n `, user);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

function loginUserFail(dispatch, err) {
  console.log(`[ERROR]<loginUserFail> err: \n `, err);
  dispatch({
    type: LOGIN_USER_FAILED,
    // payload: err,
  });  
}

export const loginUser = ({ email, password }) => async(dispatch) => {
  dispatch({ type: LOGIN_USER });
  let user;
  try {
    user = await firebase.auth().signInWithEmailAndPassword(email, password);
    loginUserSuccess(dispatch, user);
  } catch (err) {
    // Login is failed due to nonexist email. Create a new account
    try {
      user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      loginUserSuccess(dispatch, user);
    } catch (createErr) {
      loginUserFail(dispatch, createErr);
    }
  }  
};
