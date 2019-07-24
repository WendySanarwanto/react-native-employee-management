import firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_CREATE, EMPLOYEE_CREATE_FAILED, 
  EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_UPDATE,
  EMPLOYEE_FETCH, EMPLOYEE_FETCH_FAILED,
  EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE,
  EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_SAVE_FAILED,
  EMPLOYEE_RESET, EMPLOYEE_DELETE,
  EMPLOYEE_DELETE_SUCCESS, EMPLOYEE_DELETE_FAILED
} from './types';

function dispatchFailedState(dispatch, type){
  dispatch({ type });
};

function createEmployeeFailed(dispatch) {
  dispatchFailedState(dispatch, EMPLOYEE_CREATE_FAILED);
}

function fetchEmployeesFailed(dispatch){
  dispatchFailedState(dispatch, EMPLOYEE_FETCH_FAILED);
}

function saveEmployeeFailed(dispatch) {
  dispatchFailedState(dispatch, EMPLOYEE_SAVE_FAILED);
}

function deleteEmployeeFailed(dispatch) {
  dispatchFailedState(dispatch, EMPLOYEE_DELETE_FAILED);
}

function createEmployeeSuccess(dispatch) {
  dispatch({
    type: EMPLOYEE_CREATE_SUCCESS,
  });
  Actions.pop();
}

function saveEmployeeSuccess(dispatch) {
  dispatch({
    type: EMPLOYEE_SAVE_SUCCESS
  });
  Actions.pop();
}

function fetchEmployeesSuccess(dispatch, employees) {
  dispatch({
    type: EMPLOYEE_FETCH_SUCCESS,
    payload: employees
  });
}

function deleteEmployeeSuccess(dispatch) {
  dispatch({
    type: EMPLOYEE_DELETE_SUCCESS
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

export const employeeReset = _ => {
  return {
    type: EMPLOYEE_RESET
  };
}

export const employeeSave = ({id, name, phone, shift}) => async(dispatch) => {
  dispatch({ type: EMPLOYEE_SAVE })
  try {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    await db.collection(`users/${currentUser.uid}/employees/`).doc(id).update({
      name, 
      phone, 
      shift
    });
    saveEmployeeSuccess(dispatch);
  } catch(err) {
    console.log(`[ERROR]<employeeSave> err: \n`, err);
    saveEmployeeFailed(dispatch);
  }
}

export const employeeDelete = ({id}) => async(dispatch) => {
  dispatch({ type: EMPLOYEE_DELETE });
  try {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    await db.collection(`users/${currentUser.uid}/employees/`).doc(id).delete();
    deleteEmployeeSuccess(dispatch);
  } catch(err) {
    console.log(`[ERROR]<employeeDelete> err: \n`, err);
    deleteEmployeeFailed(dispatch);
  }
}