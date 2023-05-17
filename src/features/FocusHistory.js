import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { colors } from '../utils/colors'

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.history}>- {item.toUpperCase()}</Text>

  return (
    <View>
      <Text style={styles.title}>Focused On</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    color: colors.white,
    textAlign: 'center'
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});