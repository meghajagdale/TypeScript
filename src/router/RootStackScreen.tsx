import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import {ScreenStack} from './ScreenStack';

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};
export type PropsRoots = NativeStackScreenProps<
  RootStackParamList,
  'Splash',
  'Login'
>;
export type PropsRootsSplash = NativeStackScreenProps<
  RootStackParamList,
  'Splash'
>;
// This is Home stack navigation wiil taken place here
const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={ScreenStack.Splash}>
    <RootStack.Screen name={'Splash'} component={Splash} />
    <RootStack.Screen name={ScreenStack.Login} component={Login} />
  </RootStack.Navigator>
);

export default RootStackScreen;
