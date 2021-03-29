import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from './components/atoms/TextInput';
import Button from './components/atoms/Button';
import Gap from './components/atoms/Gap';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Gap height={40} />
      <TextInput placeholder="Masukan username" label="Username" />
      <Gap height={24} />
      <TextInput placeholder="Masukan password" label="Password" />
      <Gap height={48} />
      <Button label="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  gap: {
    marginTop: 20,
  },
  title: {
    color: '#ffc93c',
    fontSize: 36,
    fontWeight: '700',
  },
});

export default App;
