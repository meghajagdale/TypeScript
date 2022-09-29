import {createSlice} from '@reduxjs/toolkit';

export type ColorScheme = 'dark' | 'light';
//Theme slice for change theme of user
export interface ThemeState {
  colorScheme: ColorScheme;
}

const initialState: ThemeState = {
  colorScheme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.colorScheme = state.colorScheme === 'dark' ? 'light' : 'dark';
    },
  },
});
export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
