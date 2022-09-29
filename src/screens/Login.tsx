import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';

import {
  USER_NAME_CHANGE,
  USER_NAME_VALIDATE,
  PASSWORD_CHANGE,
  PASSWORD_VALIDATE,
  SECURE_TEXT,
  VALID_USER,
} from '../actions/LoginAction';

import {
  USER_NAME,
  USER_NAME_ERROR,
  PASSWORD,
  PASSWORD_ERROR,
  FORGOT_PASSWORD,
  YOUR_USERNAME,
  WRONG_INPUT,
  USER_PASSWORD_EMPTY,
  OKAY,
  INVALID_USER,
  USER_PASSWORD_INCORRECT,
  WELCOME,
  YOUR_PASSWORD,
  SIGN_IN,
} from '../utils/Constants';
import Button from '../component/Button';
import Text from '../component/Text';
import {createSingleButtonAlert} from '../component/AlertPop';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {Users} from '../model/users';
import LoginReducer from '../reducer/LoginReducer';
import {intialStateLogin} from '../state/UserState';
import {setSignIn} from '../slices/authSlice';
import {useAppDispatch} from '../storeConfig/store';
import {useTheme} from '../hooks/useTheme';
import {ScrollView} from 'react-native-gesture-handler';

const Login = () => {
  const dispatchStore = useAppDispatch();
  //We used useReducer to maintained state of application
  const [loginState, dispatch] = React.useReducer(
    LoginReducer,
    intialStateLogin,
  );
  const {colors} = useTheme();
  const textInputChange = (val: string) => {
    if (val.trim().length >= 4) {
      dispatch({type: USER_NAME_CHANGE, payload: {payloadString: val}});
    } else {
      dispatch({type: USER_NAME_VALIDATE, payload: {payloadString: val}});
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.trim().length >= 8) {
      dispatch({type: PASSWORD_CHANGE, payload: {payloadString: val}});
    } else {
      dispatch({type: PASSWORD_VALIDATE, payload: {payloadString: val}});
    }
  };
  const handleValidUser = (val: string) => {
    if (val.trim().length >= 4) {
      dispatch({type: VALID_USER, payload: {flag: true}});
    } else {
      dispatch({type: VALID_USER, payload: {flag: false}});
    }
  };
  const loginHandle = (userName: string, password: string) => {
    const foundUser = Users.filter(item => {
      return userName === item.username && password === item.password;
    });
    if (loginState.username.length === 0 || loginState.password.length === 0) {
      createSingleButtonAlert({
        AlertTitle: WRONG_INPUT,
        AlertMeassge: USER_PASSWORD_EMPTY,
        FirstButtonText: OKAY,
      });
      return;
    }
    if (foundUser.length === 0) {
      createSingleButtonAlert({
        AlertTitle: INVALID_USER,
        AlertMeassge: USER_PASSWORD_INCORRECT,
        FirstButtonText: OKAY,
      });
      return;
    }
    dispatchStore(
      setSignIn({
        email: foundUser[0].email,
        isLoggedIn: true,
        userName: foundUser[0].username,
      }),
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={styles.header}>
        <Text type="heading" style={{color: colors.card}}>
          {WELCOME}
        </Text>
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
            <Text type="body"> {USER_NAME}</Text>

            <View style={styles.action}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder={YOUR_USERNAME}
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
                onEndEditing={e => handleValidUser(e.nativeEvent.text)}
              />

              {loginState.check_textInputChange ? (
                <View>
                  <Feather name="check-circle" color="green" size={20} />
                </View>
              ) : null}
            </View>
            {loginState.isValidUser ? null : (
              <View>
                <Text type="subtitle" style={styles.errorMsg}>
                  {USER_NAME_ERROR}
                </Text>
              </View>
            )}
            <Text style={styles.marginTop35} type="body">
              {PASSWORD}
            </Text>

            <View style={styles.action}>
              <Feather name="lock" color={colors.text} size={20} />
              <TextInput
                placeholder={YOUR_PASSWORD}
                placeholderTextColor="#666666"
                secureTextEntry={loginState.secureTextEntry ? true : false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: SECURE_TEXT,
                    payload: {flag: !loginState.secureTextEntry},
                  });
                }}>
                {loginState.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {loginState.isValidPassword ? null : (
              <View>
                <Text type="subtitle" style={styles.errorMsg}>
                  {PASSWORD_ERROR}
                </Text>
              </View>
            )}

            <TouchableOpacity>
              <Text
                type="body"
                style={[styles.marginTop15, {color: colors.primary}]}>
                {FORGOT_PASSWORD}
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <Button
                touchableOpacityStyle={styles.button}
                btnContainer={styles.btnContainer}
                buttonTextStyle={styles.btnText}
                butonText={SIGN_IN}
                iconVisibility={false}
                buttonPress={() => {
                  loginHandle(loginState.username, loginState.password);
                }}
              />
            </View>
          </>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    width: '100%',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    height: 40,
  },
  marginTop35: {marginTop: 35},
  marginTop15: {marginTop: 15},
  btnContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
});
