import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({height}) => {
  return <View style={styles.container(height)} />;
};

export default Gap;

const styles = StyleSheet.create({
  container: height => ({
    height: height,
  }),
});
