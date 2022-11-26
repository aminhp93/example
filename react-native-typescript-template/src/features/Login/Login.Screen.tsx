import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import GeneralButton from '../../components/GeneralButton';
import styles from './Login.Style';
import {login} from '../../store/authUser';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({username, password}) as any);
  };

  const onChangeTextUsername = (data: string) => {
    setUsername(data);
  };

  const onChangeTextPassword = (data: string) => {
    setPassword(data);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>{`Login with username: username, password: password`}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextPassword}
        value={password}
      />
      <GeneralButton
        styleBtn={styles.btnGetData}
        styleText={styles.textGetData}
        onPress={handleLogin}
        title={'Login'}
      />
    </View>
  );
};

export default Login;
