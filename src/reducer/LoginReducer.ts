import {
  USER_NAME_CHANGE,
  USER_NAME_VALIDATE,
  PASSWORD_CHANGE,
  PASSWORD_VALIDATE,
  SECURE_TEXT,
  VALID_USER,
} from '../actions/LoginAction';
import {LoginType} from '../types/LoginType';
import {ActionType} from '../types/ActionType';
import {intialStateLogin} from '../state/UserState';

// This Reducer used in login screen to maintained internal state of login screen

export default (
  state: LoginType = intialStateLogin,
  action: ActionType,
): LoginType => {
  console.log('action', action);
  switch (action.type) {
    case USER_NAME_CHANGE:
      return {
        ...state,
        username:
          action.payload?.payloadString !== undefined
            ? action.payload?.payloadString
            : '',
        check_textInputChange: true,
        isValidUser: true,
      };
    case USER_NAME_VALIDATE:
      return {
        ...state,
        username:
          action.payload?.payloadString !== undefined
            ? action.payload?.payloadString
            : '',
        check_textInputChange: false,
        isValidUser: false,
      };
    case PASSWORD_CHANGE:
      return {
        ...state,
        password:
          action.payload?.payloadString !== undefined
            ? action.payload?.payloadString
            : '',
        isValidPassword: true,
      };
    case PASSWORD_VALIDATE:
      return {
        ...state,
        password:
          action.payload?.payloadString !== undefined
            ? action.payload?.payloadString
            : '',
        isValidPassword: false,
      };
    case SECURE_TEXT:
      return {
        ...state,
        secureTextEntry:
          action.payload?.flag !== undefined ? action.payload?.flag : false,
      };
    case VALID_USER:
      return {
        ...state,
        isValidUser:
          action.payload?.flag !== undefined ? action.payload?.flag : false,
      };
    default:
      return state;
  }
};
