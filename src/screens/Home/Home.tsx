import React, {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {HomeType} from '../../types/HomeType';
import {fetchUser} from '../../service/UserService';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import UserItem from './UserItem';
import {RootState, useAppDispatch} from '../../storeConfig/store';
import {PropsHome} from '../../router/HomeStackScreen';

const Home = ({navigation}: PropsHome) => {
  const dispatch = useAppDispatch();
  const {userItems, isLoading} = useSelector((state: RootState) => state.users);
  //We used useEffect to fetch user information and display in screen
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const keyExtractor = (user: HomeType, index: number) => `${user.id}${index}`;

  const renderItem = useCallback(
    ({item}: {item: HomeType}) => (
      <UserItem item={item} navigation={navigation} />
    ),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.flex}>
        <FlatList<HomeType>
          style={styles.flex}
          data={userItems}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
        {isLoading && (
          <View style={styles.overlay}>
            <ActivityIndicator color="white" size="large" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
