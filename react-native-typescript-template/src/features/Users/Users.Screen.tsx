import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, selectAllUsers} from '../../store/users';

const Users = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state: any) => {
    console.log('state', state);
    return state.users;
  });

  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }
  console.log(loading, users);
  return (
    <View>
      <Button title={'Reload'} onPress={() => dispatch(fetchUsers() as any)} />
      {users.map(user => {
        return (
          <View style={styles.container} key={user.id}>
            <View>
              <View style={styles.dataContainer}>
                <Text>
                  {user.first_name} {user.last_name}
                </Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  dataContainer: {
    flexDirection: 'row',
  },
});
