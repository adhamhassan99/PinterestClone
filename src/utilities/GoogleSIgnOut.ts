import auth from '@react-native-firebase/auth';

export const SignOutGoogle = () =>
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
