import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGGING_IN
} from './../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  user: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGGING_IN:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload, password: '', loading: false };
    default:
      return state;
  }
}
