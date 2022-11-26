import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import GeneralButton from '../../components/GeneralButton';
import styles from './Logout.Style';
import {logout} from '../../store/authUser';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(logout() as any);
  };

  return (
    <View style={styles.mainContainer}>
      <GeneralButton
        styleBtn={styles.btnGetData}
        styleText={styles.textGetData}
        onPress={handleLogin}
        title={'Logout'}
      />
    </View>
  );
};

export default Logout;
