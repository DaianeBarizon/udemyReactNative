import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          Primeiro Conteúdo
        </Text>
        <Text>
          Segundo Conteúdo
        </Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyComponent></MyComponent>
    )
  }
}

export default App;
