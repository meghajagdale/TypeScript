import React from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Text from '../component/Text';
import {
  GET_STARTED_TEXT,
  GET_STARTED_SIGN_TEXT,
  GET_STARTED,
} from '../utils/Constants';
import Button from '../component/Button';
import {PropsRootsSplash} from '../router/RootStackScreen';
import {ScrollView} from 'react-native-gesture-handler';

const SplashScreen = ({navigation}: PropsRootsSplash) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <ScrollView>
          <>
            <Text type="heading">{GET_STARTED_TEXT}</Text>
            <Text type="title">{GET_STARTED_SIGN_TEXT}</Text>

            <View style={styles.button}>
              <Button
                touchableOpacityStyle={styles.button}
                btnContainer={styles.btnContainer}
                buttonTextStyle={styles.btnText}
                butonText={GET_STARTED}
                iconVisibility={true}
                buttonPress={() => navigation.navigate('Login')}
              />
            </View>
          </>
        </ScrollView>
      </View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    width: '100%',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
});
