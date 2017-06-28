import {
  COMPANY_TEXT_CHANGED,
  POSITION_TEXT_CHANGED,
  DESCRIPTION_TEXT_CHANGED,
  REQUIREMENTS_TEXT_CHANGED
} from './types'

export const companyTextChanged = (text) => {
  return {
    type: COMPANY_TEXT_CHANGED,
    payload: text
  };
};

export const positionTextChanged = (text) => {
  return {
    type: POSITION_TEXT_CHANGED,
    payload: text
  };
};

export const descriptionTextChanged = (text) => {
  return {
    type: DESCRIPTION_TEXT_CHANGED,
    payload: text
  };
};

export const requirementsTextChanged = (text) => {
  return {
    type: REQUIREMENTS_TEXT_CHANGED,
    payload: text
  };
};
