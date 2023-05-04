import {View, Button, Text} from 'react-native';
import React from 'react';
import {SignOutGoogle} from '../utilities/GoogleSIgnOut';
import styled from 'styled-components/native';

const SignOutBtn = styled.Pressable`
  background-color: ${props => props.theme.colors.backgroundColorInverse};
  padding: 20px 40px;
  border-radius: 10px;
`;

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text`
  color: ${props => props.theme.colors.textColorInverse};
  font-weight: 600;
  font-size: 20px;
`;

const Profile = () => {
  return (
    <PageContainer>
      <SignOutBtn style={{elevation: 10}} onPress={SignOutGoogle}>
        <BtnText>SIgn Out</BtnText>
      </SignOutBtn>
    </PageContainer>
  );
};

export default Profile;
