import auth from '@react-native-firebase/auth';

export const EmailSignIn = async (email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      // console.log('That email address is already in use!');
      auth().signInWithEmailAndPassword(email, password);
    }
    if (error.code === 'auth/invalid-email') {
      // console.log('That email address is invalid!');
      throw new Error('invalid mail');
    }
  }
};
// await auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then(x => {
//     console.log('User account created & signed in!', x);
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       // console.log('That email address is already in use!');
//       auth().signInWithEmailAndPassword(email, password);
//     }

//     if (error.code === 'auth/invalid-email') {
//       // console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
