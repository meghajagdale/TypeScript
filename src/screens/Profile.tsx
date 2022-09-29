import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Switch,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '../hooks/useTheme';
import Text from '../component/Text';
import {RootState, useAppDispatch} from '../storeConfig/store';
import {setSignOut} from '../slices/authSlice';

import {NativeModules} from 'react-native';
import {
  BRAND,
  Dark_Theme,
  FOLLOWERS,
  FOllOWING,
  POST,
  SIGN_OUT,
} from '../utils/Constants';
import {toggleTheme} from '../slices/themeSlice';

const Profile = () => {
  const {colors} = useTheme();
  const user = useSelector((state: RootState) => state.userAuth);
  const colorTheme = useSelector((state: RootState) => state.theme.colorScheme);
  const [brand, setBrand] = useState<string>('');
  const darkMode = colorTheme === 'dark';
  const dispatch = useAppDispatch();
  //We used useEffect to fetch information from from native iOS and android module
  useEffect(() => {
    const DeviceInfo = NativeModules.Device;
    console.log('DeviceInfo', DeviceInfo);
    DeviceInfo.getDeviceName((err, deviceID) => {
      if (err) {
        console.log('err=====', err);
      } else {
        setBrand(deviceID);
        // device ID returned
      }
    });
  }, []);
  const onChange = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);
  const content = (val: number, title: string) => (
    <View style={styles.verticalView}>
      <Text type="smallbold">{val}</Text>
      <Text type="small" style={styles.marginTop10}>
        {title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageBackgroundNb}
            source={require('../assets/profilebackground.jpeg')}
            resizeMode="cover"
          />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://www.bootdey.com/app/webroot/img/Content/avatar/avatar8.png',
            }}
          />

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text type="title">{user.userName}</Text>
              <Text type="subtitle" style={styles.marginTop}>
                {user.email}
              </Text>
            </View>
            <View style={[styles.horizontalGrey, {borderColor: colors.border}]}>
              <View style={styles.horizontalView}>
                {content(3, POST)}
                {content(50, FOLLOWERS)}
                {content(80, FOllOWING)}
              </View>
            </View>
            <View
              style={[styles.horizontalGrey5, {borderColor: colors.border}]}>
              <View style={styles.horizontalViewPadding}>
                <Text type="button">{Dark_Theme}</Text>
                <View style={styles.horizontalEnd}>
                  <Switch value={darkMode} onValueChange={onChange} />
                </View>
              </View>
            </View>
            <View
              style={[styles.horizontalGrey5, {borderColor: colors.border}]}>
              <View style={styles.horizontalViewPadding}>
                <Text type="button">
                  {BRAND}
                  {brand}
                </Text>
              </View>
            </View>
            <View
              style={[styles.horizontalGrey5, {borderColor: colors.border}]}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setSignOut());
                }}>
                <View style={styles.horizontalViewPadding}>
                  <Text type="button">{SIGN_OUT}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 180,
  },
  body: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
  },
  marginTop: {
    marginTop: 5,
  },
  marginTop10: {
    marginTop: 10,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  horizontalGrey: {
    width: '100%',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingVertical: 20,
  },
  horizontalGrey5: {
    width: '100%',
    borderBottomWidth: 0.5,
    paddingVertical: 15,
  },
  horizontalView: {
    flexDirection: 'row',
  },
  horizontalEnd: {
    flex: 1,
    alignItems: 'flex-end',
  },
  horizontalViewPadding: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
  },
  verticalView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageBackgroundNb: {
    width: '100%',
    height: 250,
  },
});
