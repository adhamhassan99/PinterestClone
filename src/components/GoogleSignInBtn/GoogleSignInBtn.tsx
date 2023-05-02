import React from 'react';
import {Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import styled from 'styled-components/native';

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const ButtonContainer = styled.Pressable`
  background-color: #4285f4;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  padding: 10px 0px;

  border-radius: 5px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 600;
`;

function GoogleSignInBtn() {
  return (
    <ButtonContainer
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }>
      <Image
        resizeMethod="auto"
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          left: 10,
          top: 8,
          borderRadius: 5,
        }}
        source={require('../../assets/googleIcon.jpg')}
      />
      <ButtonText>google sign in</ButtonText>
    </ButtonContainer>
  );
}

export default GoogleSignInBtn;
