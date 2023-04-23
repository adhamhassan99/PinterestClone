import {View, Text, Pressable, ScrollView, StyleSheet} from 'react-native';
import React, {SetStateAction, useRef, useState} from 'react';

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
    <View style={styles(selectedBtn, 0).pageContainer}>
      <ScrollView
        ref={ScrollRef}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {interests.map((interest, index) => (
          <Pressable
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              coords[interest.id] = layout.x;
            }}
            onPress={() => {
              handleClick(index, interest.id);
            }}
            style={styles(selectedBtn, index).buttonContainer}
            key={index}>
            <Text style={styles(selectedBtn, index).btnText}>
              {interest.title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
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
