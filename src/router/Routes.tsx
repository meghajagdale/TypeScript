import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import RootStackScreen from './RootStackScreen';
import HomeStackScreen from './HomeStackScreen';
import {RootState} from '../storeConfig/store';
import {useTheme} from '../hooks/useTheme';

const Routes = () => {
  const userAuth = useSelector((state: RootState) => state.userAuth);
  const theme = useTheme();
  // Router descision will take place here
  return (
    <NavigationContainer theme={theme}>
      {userAuth.isLoggedIn ? <HomeStackScreen /> : <RootStackScreen />}
    </NavigationContainer>
  );
};

export default Routes;
