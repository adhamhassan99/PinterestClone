import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SheetManager} from 'react-native-actions-sheet';

type Props = {
  sheetName?: string;
  centerText?: string;
  mainAction?: Function;
  mainActionActive?: boolean;
};

const ActionSheetHeader = ({
  sheetName = '',
  centerText = '',
  mainAction = () => {},
  mainActionActive = false,
}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={async () => await SheetManager.hide(sheetName)}>
        <MaterialCommunityIcons name="close" color={'white'} size={25} />
      </Pressable>
      <Text style={styles.centerText}>{centerText}</Text>
      <Pressable
        disabled={!mainActionActive}
        style={mainActionActive ? styles.active : styles.inActive}
        onPress={() => mainAction()}>
        <Text
          style={
            mainActionActive ? styles.mainActionActiveText : styles.mainAction
          }>
          Create
        </Text>
      </Pressable>
    </View>
  );
};

export default ActionSheetHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  centerText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
  },
  mainAction: {
    color: '#7b7979',
    fontSize: 16,
  },
  active: {
    backgroundColor: 'red',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 25,
  },
  inActive: {paddingHorizontal: 13, paddingVertical: 7},
  mainActionActiveText: {fontSize: 16, color: 'white', fontWeight: '700'},
});
