import {View, Text} from 'react-native';
import React from 'react';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

const BottomTabSheet = (props: SheetProps) => {
  return (
    <ActionSheet containerStyle={{flex: 0.2}} id={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
};

export default BottomTabSheet;
