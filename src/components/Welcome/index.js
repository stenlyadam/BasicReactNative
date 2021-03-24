import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Title extends Component {
  state = {
    name: 'John Doe',
  };

  componentDidUpdate() {
    console.log('Component Welcome did update');
  }

  componentDidMount() {
    console.log('Component Welcome did mount');
    setTimeout(() => {
      this.setState({name: 'Stenly Adam'});
    }, 3000);
  }

  componentWillUnmount() {
    console.log('Component Welcome will unmount');
  }

  render() {
    console.log('Render Component');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text} {this.state.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
  },
});

export default Title;
