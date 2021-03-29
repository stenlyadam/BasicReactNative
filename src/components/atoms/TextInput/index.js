import React from 'react';
import {StyleSheet, TextInput as Input, View, Text} from 'react-native';

const TextInput = ({placeholder, label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    paddingLeft: 15,
    paddingVertical: 15,
    marginTop: 5,
  },
});

export default TextInput;
