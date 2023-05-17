import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../utils/sizes'

export const Focus = ({ addSubject }) => {
const [subject, setSubject] = useState('');
  //console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} 
          label='What would you like to focus on?'
          onChangeText={setSubject}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton title='+' size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: 14,
    fontSize: 10
  },
  buttonContainer: {
    justifyContent: 'center'
  }
});