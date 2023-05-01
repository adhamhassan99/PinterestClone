import {Image, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import GoogleSignInBtn from '../components/GoogleSignInBtn/GoogleSignInBtn';

const PageContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundColor};
  align-items: center;
  padding: 50px 50px;
`;

const Maintext = styled.Text`
  font-weight: 800;
  font-size: 30px;
  color: ${props => props.theme.colors.textColor};
`;

const SubText = styled.Text`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const InputField = styled.TextInput<any>`
  width: 100%;
  padding: ${props => (props.focused ? '7px 14px' : '8px 15px')};
  border: ${props => (props.focused ? '2px solid #7dbff3' : '1px solid black')};
  border-radius: 5px;
  margin-bottom: 10px;
`;
const SignInButton = styled.Pressable`
  background-color: #e60023;
  width: 100%;
  align-items: center;
  padding: 10px 0px;
  border-radius: 5px;
  margin-top: 5px;
`;

const Buttontext = styled.Text`
  color: ${props => props.theme.colors.textColorInverse};
  font-size: 16px;
  font-weight: 600;
`;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  return (
    <PageContainer>
      <Image
        style={{width: 100, height: 100}}
        source={require('../../assets/android/PinterestLogo.png')}
      />
      <Maintext>Log in to see more</Maintext>
      <SubText>Access Pinterest's best ideas with a free account</SubText>

      <InputField
        focused={emailFocused}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        value={email}
        placeholder="email"
        onChangeText={setEmail}
      />
      <InputField
        focused={passwordFocused}
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <SignInButton>
        <Buttontext>Log In</Buttontext>
      </SignInButton>
      <GoogleSignInBtn />
    </PageContainer>
  );
};

export default SignIn;
