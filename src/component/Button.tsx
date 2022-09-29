import React from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../hooks/useTheme';
type Props = {
  touchableOpacityStyle: StyleProp<ViewStyle>;
  btnContainer: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<ViewStyle>;
  butonText: string;
  iconVisibility?: boolean;
  buttonPress: () => void;
};
//Common component for button
const Button = (props: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={props.buttonPress}
      style={props.touchableOpacityStyle}>
      <View style={[props.btnContainer, {backgroundColor: colors.primary}]}>
        <Text style={[props.buttonTextStyle, {color: colors.card}]}>
          {props.butonText}
        </Text>
        {props.iconVisibility ? (
          <MaterialIcons name="navigate-next" color={colors.card} size={20} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
