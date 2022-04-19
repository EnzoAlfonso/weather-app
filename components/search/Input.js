import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const Input = ({search, setSearch}) => {
  function handlerSearch(text) {
    setSearch(text);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={handlerSearch}
        placeholder="City name"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    height: 44,
    width: 283,
    margin: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
    padding: 10,
  },
});
