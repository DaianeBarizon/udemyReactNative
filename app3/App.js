import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '' }
  }

  jokenpo(escolhaUsuario) {
    //alert(escolhaUsuario);
    this.setState({ escolhaUsuario: escolhaUsuario })
  }

  render() {
    return (
      <View>
        <Text>Escolha do Computador</Text>
        <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
        <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
        <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
      </View>
    )
  }
}

export default App;
