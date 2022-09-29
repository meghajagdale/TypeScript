import React from 'react';
import {StyleSheet, View, Linking, ScrollView} from 'react-native';

import {
  Contact_Information,
  Other_Information,
  PHONE,
  USER_NAME1,
  WEBSITE,
} from '../utils/Constants';
import Text from '../component/Text';
import {HomeType} from '../types/HomeType';

const UserDetails = ({route}) => {
  const item: HomeType = route.params.item;
  //We have used Linking for actionable button on phone and website
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text type="title">{item.name}</Text>
          <Text type="subtitle" style={styles.marginTop5}>
            {item.company.name}
          </Text>
        </View>
        <View style={styles.heading1}>
          <Text type="title">{Contact_Information}</Text>
        </View>
        <View style={styles.heading2}>
          <Text type="body">{item.email}</Text>
          <Text type="body" style={styles.marginTop}>
            {item.address.street}
          </Text>
          <Text type="body" style={styles.marginTop5}>
            {item.address.suite}{' '}
          </Text>
          <Text type="body" style={styles.marginTop5}>
            {item.address.city}
          </Text>
          <Text type="body" style={styles.marginTop5}>
            {item.address.zipcode}
          </Text>
        </View>
        <View style={styles.heading1}>
          <Text type="title">{Other_Information}</Text>
        </View>
        <View style={styles.heading2}>
          <Text type="body">
            {USER_NAME1}
            {item.username}
          </Text>

          <Text
            type="body"
            style={styles.marginTop5}
            onPress={() => {
              Linking.openURL('https://' + item.website);
            }}>
            {WEBSITE}
            {item.website}
          </Text>

          <Text
            type="body"
            style={styles.marginTop5}
            onPress={() => {
              Linking.openURL('tel:' + item.phone);
            }}>
            {PHONE}
            {item.phone}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading1: {
    flexDirection: 'column',
    marginTop: 30,
  },
  heading2: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  hyperlinkStyle: {
    color: 'blue',
  },
  marginTop: {
    marginTop: 10,
  },
  marginTop5: {
    marginTop: 5,
  },
});
