import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScreenStack} from '../../router/ScreenStack';
import {HomeContentType} from '../../types/HomeType';
import Text from '../../component/Text';

const UserItem = (props: HomeContentType) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate(ScreenStack.UserDetails, {item: props.item})
      }>
      <View style={styles.container}>
        <Text type="title">{props.item.name}</Text>
        <Text type="body" style={styles.maginTop}>
          {props.item.email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  maginTop: {marginTop: 5},
});
