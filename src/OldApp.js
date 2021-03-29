import React, {Component} from 'react';
import {Button, Image, ScrollView, TextInput} from 'react-native';
import Welcome from './components/Welcome';

class App extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.state.show && <Welcome text="Welcome" />}
        <Button
          title="Toggle"
          onPress={() => this.setState({show: !this.state.show})}
        />
        <Image source={require('./assets/logo-unklab.png')} />
        <TextInput
          placeholder="Username"
          style={{
            borderWidth: 1,
            marginHorizontal: 5,
            marginVertical: 10,
            paddingVertical: 12,
            paddingLeft: 20,
            borderRadius: 8,
          }}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
        <TextInput
          placeholder="Username"
          style={{borderWidth: 1, marginHorizontal: 5, marginVertical: 10}}
        />
      </ScrollView>
    );
  }
}

export default App;
