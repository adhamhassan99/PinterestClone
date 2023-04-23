import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    onPress: () => {},
  },
];

const BottomTabSheet = (props: SheetProps) => {
  return (
    <ActionSheet containerStyle={styles.sheetContainer} id={props.sheetId}>
      <View style={styles.row}>
        <Pressable onPress={() => SheetManager.hide(props.sheetId)}>
          <MaterialCommunityIcons name="close" color={'white'} size={25} />
        </Pressable>
        <View style={styles.centerTextContainer}>
          <Text style={[styles.white, styles.centerText]}>
            Start creating now
          </Text>
        </View>
      </View>
      <View style={[styles.row, styles.buttonsContainer]}>
        {sheetButtons.map((button, index) => (
          <Pressable style={styles.button} key={index}>
            <MaterialCommunityIcons
              name={button.iconName}
              size={30}
              color="white"
            />
          </Pressable>
        ))}
      </View>
    </ActionSheet>
  );
};

export default BottomTabSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    flex: 0.2,
    backgroundColor: '#292929',
    paddingTop: 15,
    paddingLeft: 20,
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
    color: 'white',
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
    backgroundColor: '#4b4b4b',
    padding: 17,
    marginHorizontal: 13,
    borderRadius: 17,
  },
});
