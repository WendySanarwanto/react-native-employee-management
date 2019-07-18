import { EMAIL_CHANGED } from './types';

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email,
  };
};
