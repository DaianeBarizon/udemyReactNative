import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          Texto simples
        </Text>
      </View>
    );
  }
}

class App extends Component {
  // constructor() {

  // }


  render() {
    return (
      <View>
        <MyComponent></MyComponent>
        <Button
          title='Clicar'
        />
      </View>
    )
  }
}

export default App;
