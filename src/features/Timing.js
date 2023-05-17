import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes'

export const Timing = ({ changeTime }) => {

  return (
    <View style={styles.buttonContainer}>
      <RoundedButton style={styles.button} title='5' size={50} onPress={() => changeTime(5)}/>
      <RoundedButton style={styles.button} title='10' size={50} onPress={() => changeTime(10)}/>
      <RoundedButton style={styles.button} title='15' size={50} onPress={() => changeTime(15)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: spacing.sm,
  }
})