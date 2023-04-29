import {View, Text, Pressable, ScrollView, StyleSheet} from 'react-native';
import React, {SetStateAction, useRef, useState} from 'react';
import styled from 'styled-components/native';

type Props = {};
const interests = [
  {
    id: 1,
    title: 'For You',
  },
  {
    id: 2,
    title: 'Web Design',
  },
  {
    id: 3,
    title: 'Decor',
  },
  {
    id: 4,
    title: 'For You',
  },
  {
    id: 5,
    title: 'Web Design',
  },
  {
    id: 6,
    title: 'Decor',
  },
  {
    id: 7,
    title: 'For You',
  },
  {
    id: 8,
    title: 'Web Design',
  },
  {
    id: 9,
    title: 'Decor',
  },
];

const ButtonContainer = styled.Pressable`
  background-color: ${props =>
    props.selectedId === props.index
      ? props.theme.colors.backgroundColorInverse
      : 'transparent'};
  margin-left: 0;
  margin-right: 0px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color: ${props =>
    props.selectedId === props.index
      ? props.theme.colors.textColorInverse
      : props.theme.colors.textColor};
`;

const PageContainer = styled.View`
  padding: 10px 30px;
`;

const PersonalizedTopicsHeader = (props: Props) => {
  const ScrollRef = useRef<ScrollView>(null);
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [coords, setCoords] = useState([]);
  const handleClick = (id: SetStateAction<number>, xPosition: number) => {
    setSelectedBtn(id);
    ScrollRef.current?.scrollTo({
      x: coords[xPosition] - 50,
      y: 0,
      animated: true,
    });
  };

  return (
    <PageContainer>
      <ScrollView
        ref={ScrollRef}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {interests.map((interest, index) => (
          <ButtonContainer
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              coords[interest.id] = layout.x;
            }}
            onPress={() => {
              handleClick(index, interest.id);
            }}
            selectedId={selectedBtn}
            index={index}
            key={index}>
            <ButtonText selectedId={selectedBtn} index={index}>
              {interest.title}
            </ButtonText>
          </ButtonContainer>
        ))}
      </ScrollView>
    </PageContainer>
  );
};

export default PersonalizedTopicsHeader;

const styles = (selectedId: number, index: number) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: selectedId === index ? 'white' : 'transparent',
      marginHorizontal: 0,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 20,
    },
    pageContainer: {
      paddingHorizontal: 40,
      paddingVertical: 10,
    },
    btnText: {
      color: selectedId === index ? 'black' : 'white',
      fontWeight: '600',
      fontSize: 15,
    },
  });
