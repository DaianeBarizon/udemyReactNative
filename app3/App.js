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
          {this.props.props}
        </Text>
        <Text>
          {this.props.xyx}
        </Text>
        <Text>
          {this.props.qualquercoisa}
        </Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyComponent props='Banana' xyx='Uva' qualquercoisa='Goiaba'></MyComponent>
    )
  }
}

export default App;
