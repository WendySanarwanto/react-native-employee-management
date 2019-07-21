import firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_CREATE, EMPLOYEE_CREATE_FAILED, 
  EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_UPDATE } from './types';

function createEmployeeFailed(dispatch) {
  dispatch({
    type: EMPLOYEE_CREATE_FAILED
  });
}

function createEmployeeSuccess(dispatch) {
  dispatch({
    type: EMPLOYEE_CREATE_SUCCESS,
  });
  Actions.pop();
}

export const employeeCreate = ({ name, phone, shift }) => async(dispatch) => {
  // TODO: implement this
  dispatch({
    type: EMPLOYEE_CREATE
  });
  try {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const docRef = await db.collection(`users/${currentUser.uid}/employees/`)
      .add({
        name, phone, shift
      });
    const newEmployeeId = docRef.id;
    console.log(`[debug]<employeeCreate> newEmployeeId: ${newEmployeeId}`);
    createEmployeeSuccess(dispatch);
  } catch(err) {
    console.log(`[ERROR]<employeeCreate> err: \n`, err);
    createEmployeeFailed(dispatch);
  }
}

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};