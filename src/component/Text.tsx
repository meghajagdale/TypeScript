import {Text as RNText, TextProps} from 'react-native';
import React from 'react';
import {TextType, useTextStyle} from '../utils/TextUtils';

interface Props extends TextProps {
  type?: TextType;
}
//Common component for text
const Text = (props: Props) => {
  const textStyle = useTextStyle(props.type);
  return <RNText {...props} style={[textStyle, props.style]} />;
};

export default Text;
