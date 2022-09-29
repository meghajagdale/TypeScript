import {LoginType} from '../types/LoginType';

//Initial state of login screen
export const intialStateLogin: LoginType = {
  username: '',
  password: '',
  check_textInputChange: false,
  secureTextEntry: true,
  isValidUser: true,
  isValidPassword: true,
};
