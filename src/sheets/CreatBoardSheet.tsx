import {
  View,
  Text,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActionSheetHeader} from '../components';

const CreatBoardSheet = (props: SheetProps) => {
  const [boardName, setBoardName] = useState('');
  return (
    <ActionSheet containerStyle={styles.sheetContainer} id={props.sheetId}>
      <KeyboardAvoidingView>
        <ActionSheetHeader
          sheetName="CreatBoardSheet"
          centerText="Create board"
          mainActionActive={boardName !== ''}
        />
        <View>
          <Text style={styles.inputLabel}>Board Name</Text>
          <TextInput
            onChangeText={setBoardName}
            autoFocus
            placeholder="Add"
            placeholderTextColor={'#7b7979'}
            style={{
              fontSize: 20,
              color: 'white',
              padding: 0,
              fontWeight: '600',
            }}
            cursorColor={'red'}
          />
        </View>
      </KeyboardAvoidingView>
    </ActionSheet>
  );
};

export default CreatBoardSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    paddingLeft: 20,
    paddingRight: 5,
    flex: 1,
    backgroundColor: '#292929',
    paddingTop: 15,
  },
  inputLabel: {
    color: 'white',
    fontSize: 17,
  },
});
