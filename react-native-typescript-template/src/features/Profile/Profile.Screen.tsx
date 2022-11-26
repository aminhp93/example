import React, {useEffect} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GeneralButton from '../../components/GeneralButton';
import LoadingView from '../../components/LoadingView';
import {fetchProfile} from '../../store/profile';
import NoDataView from '../../components/NoDataView';
import styles from './Profile.Style';

const Profile = () => {
  const [text, setText] = React.useState('aminhp93');

  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);

  const handleFetchProfile = () => {
    dispatch(fetchProfile(text) as any);
  };

  const onChangeText = (data: any) => {
    setText(data);
  };

  useEffect(() => {
    dispatch(fetchProfile('aminhp93') as any);
  }, [dispatch]);

  console.log(profile);

  const renderDataView = () => {
    if (profile.data) {
      return (
        <View style={styles.body}>
          <Image
            style={styles.avatar}
            source={{uri: profile.data.avatar_url}}
          />
          <Text style={styles.textData}>{profile.data.login}</Text>
          <Text style={styles.textData}>{profile.data.name}</Text>
          <Text style={styles.textData}>{profile.data.location}</Text>
        </View>
      );
    } else if (profile.err) {
      return <NoDataView onRetryPress={handleFetchProfile} />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <GeneralButton
        styleBtn={styles.btnGetData}
        styleText={styles.textGetData}
        onPress={handleFetchProfile}
        title={'Get profile'}
      />

      {renderDataView()}
      {profile.loading && <LoadingView />}
    </View>
  );
};

export default Profile;
