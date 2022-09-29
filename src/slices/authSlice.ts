import {createSlice} from '@reduxjs/toolkit';
import {intialStateApp} from '../state/AppState';
import {AppType} from '../types/AppType';
//Auth slice for user login and log out feature
const authSlice = createSlice({
  name: 'userAuth',
  initialState: intialStateApp,
  reducers: {
    setSignIn: (state: AppType, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
    },
    setSignOut: (state: AppType) => {
      state.email = '';
      state.userName = '';
      state.isLoggedIn = false;
    },
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;
export default authSlice.reducer;
