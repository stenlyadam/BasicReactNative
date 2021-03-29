import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label}) => {
  return (
    <TouchableOpacity style={styles.submit}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#ffc93c',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default Button;
