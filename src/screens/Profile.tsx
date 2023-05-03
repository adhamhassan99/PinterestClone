import {View, Button} from 'react-native';
import React from 'react';
import {SignOutGoogle} from '../utilities/GoogleSIgnOut';

const Profile = () => {
  return (
    <View>
      <Button title={'sign out'} onPress={SignOutGoogle} />
    </View>
  );
};

export default Profile;
