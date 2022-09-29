import React from 'react';
import {ScreenStack} from './ScreenStack';
import Home from '../screens/Home/Home';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import UserDetails from '../screens/UserDetails';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from '../screens/Profile';
import {useTheme} from '../hooks/useTheme';

import {HomeType} from '../types/HomeType';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  UserDetails: {item: HomeType} | undefined;
};
export type PropsHome = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'UserDetails'
>;
// This is Home stack navigation wiil taken place here
const HomeDetailsStackScreen = () => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      initialRouteName={ScreenStack.Home}
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {backgroundColor: colors.primary},
        headerTintColor: 'white',
        headerTitleStyle: {color: colors.background},
        headerTitleAlign: 'left',
      }}>
      <HomeStack.Screen
        name={ScreenStack.Home}
        component={Home}
        options={{
          title: 'My Application',
        }}
      />
      <HomeStack.Screen
        name={ScreenStack.UserDetails}
        component={UserDetails}
      />
    </HomeStack.Navigator>
  );
};
// We have materail tab from navigation libarary which is used here
const HomeStackScreen = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={ScreenStack.Home}
      activeColor={colors.primary}
      inactiveColor={colors.border}
      barStyle={{backgroundColor: colors.background}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const icons = {
            Home: 'home-outline',
            Profile: 'account-outline',
          };

          return <Icon name={icons[route.name]} color={color} size={26} />;
        },
      })}>
      <Tab.Screen name={ScreenStack.Home} component={HomeDetailsStackScreen} />
      <Tab.Screen name={ScreenStack.Profile} component={Profile} />
    </Tab.Navigator>
  );
};
export default HomeStackScreen;
