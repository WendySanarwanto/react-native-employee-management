import firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_CREATE, EMPLOYEE_CREATE_FAILED, 
  EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_UPDATE,
  EMPLOYEE_FETCH, EMPLOYEE_FETCH_FAILED,
  EMPLOYEE_FETCH_SUCCESS } from './types';

function dispatchFailedState(dispatch, type){
  dispatch({ type });
};

function createEmployeeFailed(dispatch) {
  dispatchFailedState(dispatch, EMPLOYEE_CREATE_FAILED);
}

function fetchEmployeesFailed(dispatch){
  dispatchFailedState(dispatch, EMPLOYEE_FETCH_FAILED);
}

function createEmployeeSuccess(dispatch) {
  dispatch({
    type: EMPLOYEE_CREATE_SUCCESS,
  });
  Actions.pop();
}

function fetchEmployeesSuccess(dispatch, employees) {
  dispatch({
    type: EMPLOYEE_FETCH_SUCCESS,
    payload: employees
  });
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

export const employeesFetchOld = _ => async (dispatch) => {
  dispatch({ type: EMPLOYEE_FETCH });
  try {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const querySnapshot = await db.collection(`users/${currentUser.uid}/employees/`).get();
    const employees = [];
    querySnapshot.forEach(doc => {       
      const data = doc.data();
      data.id = doc.id;
      employees.push(data);
    });
    console.log(`[DEBUG]<employeesFetch> employees: \n`, employees);
    fetchEmployeesSuccess(dispatch, employees);
  } catch(err) {
    console.log(`[ERROR]<employeesFetch> err: \n`, err);
    fetchEmployeesFailed(dispatch);
  }
}

export const employeesFetch = _ => async (dispatch) => {
  dispatch({ type: EMPLOYEE_FETCH });
  try {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/employees/`)
      .onSnapshot((querySnapshot) => {
        const employees = [];
        querySnapshot.forEach(doc => {       
          const data = doc.data();
          data.id = doc.id;
          employees.push(data);
        });
        console.log(`[DEBUG]<employeesFetch> employees: \n`, employees);
        fetchEmployeesSuccess(dispatch, employees);    
      });
  } catch(err) {
    console.log(`[ERROR]<employeesFetch> err: \n`, err);
    fetchEmployeesFailed(dispatch);
  }
}

export const employeeEdit = (employee) => {
  return {
    type: EMPLOYEE_EDIT,
    payload: employee
  } 
}