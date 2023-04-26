import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

const ExtendedPinFooter = (props: Props) => {
  return (
    <View style={styles().footerContainer}>
      <Pressable>
        <MaterialCommunityIcons name="chat-outline" color={'white'} size={23} />
      </Pressable>
      <View style={styles().row}>
        <Pressable style={[styles('View').footerButton]}>
          <Text style={styles().ViewText}>View</Text>
        </Pressable>
        <Pressable style={[styles('Save').footerButton]}>
          <Text style={styles().SaveText}>Save</Text>
        </Pressable>
      </View>
      <Pressable>
        <MaterialCommunityIcons
          name="monitor-share"
          color={'white'}
          size={20}
        />
      </Pressable>
    </View>
  );
};

export default ExtendedPinFooter;

const styles = (text: string = '') =>
  StyleSheet.create({
    footerContainer: {
      backgroundColor: '#292929',
      paddingVertical: 10,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    footerButton: {
      backgroundColor: text === 'Save' ? 'red' : '#4b4b4b',
      marginHorizontal: 5,
      paddingHorizontal: 18,
      paddingVertical: 9,
      borderRadius: 20,
    },
    ViewText: {
      color: 'white',
      fontWeight: '700',
    },
    SaveText: {
      color: 'white',
      fontWeight: '700',
    },
  });
