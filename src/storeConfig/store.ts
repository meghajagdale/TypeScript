import {configureStore} from '@reduxjs/toolkit';
import authReDucer from '../slices/authSlice';
import usersReducer from '../slices/userSlice';
import themeReducer from '../slices/themeSlice';
import {useDispatch} from 'react-redux';
//In this application we have used 3 slice and it is maintained in store
const store = configureStore({
  reducer: {
    userAuth: authReDucer,
    users: usersReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
