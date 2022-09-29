import {TextStyle} from 'react-native';
import {useTheme} from '../hooks/useTheme';

//All Text types and mapping text type style will take places here
export type TextType =
  | 'title'
  | 'subtitle'
  | 'heading'
  | 'body'
  | 'button'
  | 'smallbold'
  | 'small';
export type FontWieght =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type FontFamily = 'Gotham-Medium' | 'Gotham-Book' | 'Gotham-Light';
const weight: Record<TextType, FontWieght> = {
  title: 'bold',
  subtitle: '200',
  heading: 'bold',
  body: '400',
  button: '500',
  smallbold: 'bold',
  small: 'normal',
};
const size: Record<TextType, number> = {
  title: 20,
  subtitle: 16,
  heading: 30,
  body: 16,
  button: 16,
  small: 13,
  smallbold: 14,
};

const lineHeight: Record<TextType, number> = {
  title: 20,
  subtitle: 16,
  heading: 30,
  body: 16,
  button: 16,
  small: 16,
  smallbold: 16,
};

const font: Record<TextType, FontFamily> = {
  title: 'Gotham-Medium',
  subtitle: 'Gotham-Light',
  heading: 'Gotham-Book',
  body: 'Gotham-Light',
  button: 'Gotham-Book',
  small: 'Gotham-Medium',
  smallbold: 'Gotham-Book',
};

export const useTextStyle = (type: TextType = 'body') => {
  const theme = useTheme();
  const style: TextStyle = {
    color: theme.colors.text,
    fontWeight: weight[type],
    fontSize: size[type],
    fontFamily: font[type],
    lineHeight: lineHeight[type],
  };
  return style;
};
