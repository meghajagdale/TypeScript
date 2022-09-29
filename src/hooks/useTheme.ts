import {useSelector} from 'react-redux';
import {RootState} from '../storeConfig/store';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
//Custome hook for switching between light and dark theme

const lightTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDarkTheme.colors,
    primary: '#0D5AC8',
    background: '#ffffff',
    text: '#515151',
    card: '#fff',
    border: '#A0A0A0',
  },
};

const darkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: '#0C0557',
    background: '#333333',
    text: '#ffffff',
    card: '#A0A0A0',
    border: '#A0A0A0',
  },
};
export const useTheme = () => {
  const colorTheme = useSelector((state: RootState) => state.theme.colorScheme);
  return colorTheme === 'dark' ? darkTheme : lightTheme;
};
