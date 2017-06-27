import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGGING_IN
} from './types';

export const emailChanged = email => {
  console.log("Action Fired")
  return {
    type: EMAIL_CHANGED,
    payload: email
  }
}

export const passwordChanged = password => {
  console.log("Action Fired")
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}

export const loginUser = ({ email, password}) => dispatch => {
  dispatch({ type: LOGGING_IN });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
          dispatch({ type: LOGIN_USER_FAILED, payload: "AUTH ERROR" })
        });
    });
}

const loginUserSuccess = (dispatch, user) => {
  Actions.welcome()
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
}
