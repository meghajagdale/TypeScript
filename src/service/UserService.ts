import {createAsyncThunk} from '@reduxjs/toolkit';
import {HomeType} from '../types/HomeType';
//Api calling for fetching user list
export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).catch();
  return (await response.json()) as HomeType[];
});
