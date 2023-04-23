import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    </ActionSheet>
  );
};

export default BottomTabSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    flex: 0.15,
    backgroundColor: '#5f5f5f',
    paddingTop: 15,
    paddingLeft: 20,
  },
  centerTextContainer: {
    marginRight: 55,
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
});
