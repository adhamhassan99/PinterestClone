import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const sheetButtons = [
  {
    title: 'Idea Pin',
    iconName: 'shape-square-rounded-plus',
    onPress: () => {},
  },
  {
    title: 'Pin',
    iconName: 'pin',
    onPress: () => {},
  },
  {
    title: 'Board',
    iconName: 'collage',
    onPress: async () => {
      await SheetManager.hide('BottomTabSheet');
      SheetManager.show('CreatBoardSheet');
    },
  },
];

const BottomTabSheet = (props: SheetProps) => {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <ActionSheet
      containerStyle={styles(theme).sheetContainer}
      id={props.sheetId}>
      <View style={styles().row}>
        <Pressable onPress={() => SheetManager.hide(props.sheetId)}>
          <MaterialCommunityIcons
            name="close"
            color={theme === 'light' ? 'black' : 'white'}
            size={25}
          />
        </Pressable>
        <View style={styles().centerTextContainer}>
          <Text style={[styles(theme).white, styles().centerText]}>
            Start creating now
          </Text>
        </View>
      </View>
      <View style={[styles().row, styles().buttonsContainer]}>
        {sheetButtons.map((button, index) => (
          <View key={index} style={styles().buttonView}>
            <Pressable onPress={button.onPress} style={styles(theme).button}>
              <MaterialCommunityIcons
                name={button.iconName}
                size={30}
                color={theme === 'light' ? 'black' : 'white'}
              />
            </Pressable>
            <Text style={styles(theme).buttontext}>{button.title}</Text>
          </View>
        ))}
      </View>
    </ActionSheet>
  );
};

export default BottomTabSheet;

const styles = (theme: string = '') =>
  StyleSheet.create({
    sheetContainer: {
      backgroundColor: theme === 'light' ? 'white' : '#292929',
      paddingTop: 15,
      paddingLeft: 20,
      paddingBottom: 30,
    },
    centerTextContainer: {
      marginRight: 28,
      flex: 1,
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    white: {
      color: theme === 'light' ? 'black' : 'white',
    },
    centerText: {
      fontWeight: '500',
      fontSize: 16,
    },
    buttonsContainer: {
      justifyContent: 'center',
      marginTop: 20,
    },
    button: {
      backgroundColor: theme === 'light' ? 'lightgrey' : '#4b4b4b',
      padding: 17,
      marginHorizontal: 13,
      borderRadius: 17,
    },
    buttonView: {
      alignItems: 'center',
    },
    buttontext: {
      color: theme === 'light' ? 'black' : 'white',
      marginTop: 5,
      fontWeight: '500',
    },
  });
