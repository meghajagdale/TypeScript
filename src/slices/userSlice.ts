import {createSlice} from '@reduxjs/toolkit';
import {intialStateHome} from '../state/HomeState';
import {fetchUser} from '../service/UserService';
//User slice for maiantaining user list information
const usersSlice = createSlice({
  name: 'users',
  initialState: intialStateHome,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userItems = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, state => {
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
