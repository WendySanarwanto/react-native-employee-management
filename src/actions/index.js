import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
