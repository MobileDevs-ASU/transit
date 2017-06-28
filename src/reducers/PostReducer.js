import {
  COMPANY_TEXT_CHANGED,
  POSITION_TEXT_CHANGED,
  DESCRIPTION_TEXT_CHANGED,
  REQUIREMENTS_TEXT_CHANGED
} from './../actions/types';

const INITIAL_STATE = {
  company: '',
  position: '',
  description: '',
  requirements: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMPANY_TEXT_CHANGED:
      return { ...state, company: action.payload };
    case POSITION_TEXT_CHANGED:
      return { ...state, position: action.payload };
    case DESCRIPTION_TEXT_CHANGED:
      return { ...state, description: action.payload };
    case REQUIREMENTS_TEXT_CHANGED:
      return { ...state, requirements: action.payload };
    default:
      return state;
  }
}
