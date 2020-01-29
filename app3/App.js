import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

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

    var resultado = '';

    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Você Perdeu :(';
      }
    }

    if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você Perdeu :(';
      }
    }

    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Você Perdeu!';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    })
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painel}>
          <View style={styles.btn}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
          </View>
          <View style={styles.btn}>
            <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
          </View>
          <View style={styles.btn}>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 90,
  },
  painel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
  },
  resultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
  }
});

export default App;
