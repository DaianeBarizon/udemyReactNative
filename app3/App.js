import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '' }
  }

  jokenpo(escolhaUsuario, escolhaComputador) {
    //gerar números aleatórios ( 0, 1, 2 )
    var numAletorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch (numAletorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador
    })
  }

  render() {
    return (
      <View>
        <Text>Escolha do Computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultados: </Text>
        <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
        <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
        <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
      </View>
    )
  }
}

export default App;
