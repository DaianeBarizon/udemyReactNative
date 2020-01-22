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
          {this.props.test}
        </Text>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Hello World!' };
  }

  alteratexto() {
    this.setState({ text: 'Hello App!' })
  }

  render() {
    return (
      <View>
        <MyComponent test={this.state.text}></MyComponent>
        <Button
          onPress={() => { this.alteratexto() }}
          title='Clicar'
        />
      </View>
    )
  }
}

export default App;
