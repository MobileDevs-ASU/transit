import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import postReducer from './PostReducer';

export default combineReducers({
  auth: authReducer,
  post: postReducer
});
