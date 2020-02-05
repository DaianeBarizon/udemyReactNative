import React, { Component } from 'react';
import firebase from 'firebase';

import {
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pontuacao: 0 };
  }

  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCWxyi8dbOkGHC2MlDEdlRmjKqb0rYmgRU",
      authDomain: "configuracaofirebasereac-fe526.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-fe526.firebaseio.com",
      projectId: "configuracaofirebasereac-fe526",
      storageBucket: "configuracaofirebasereac-fe526.appspot.com",
      messagingSenderId: "40332772201",
      appId: "1:40332772201:web:530e56eb0bbbf324e6f3f8",
      measurementId: "G-6JB7VE5NHQ"
    };

    firebase.initializeApp(firebaseConfig);
  }

  salvarDados() {
    var funcionarios = firebase.database().ref('funcionarios');
    // Inserção de dados
    funcionarios.child('001').child('nome').set('Daiane');
    // funcionarios.child('002').child('nome').set('Dai');

    // Remover dados
    // funcionarios.child('001').remove();
    // funcionarios.remove(); 

    // Gerar um id único automático. Toda vez que clica no botão e vai gerando identificadores únicos
    // funcionarios.push().child('nome').set('John');

    // Salvando com Objetos Literais
    // funcionarios.push().set(
    //   {
    //     nome: 'Barizon',
    //     altura: '1,64',
    //     peso: '52kg'
    //   }
    // );

    // Estrutura de nós
    // funcionarios
    //   001
    //     nome: Daiane
  }

  listarDados() {
    var pontuacao = firebase.database().ref('pontuacao');
    //ouvinte. vai ser chamado sempre os dados forem alterados
    pontuacao.on('value', (snapshot) => {
      var pontos = snapshot.val();
      this.setState({ pontuacao: pontos });
    });
  }

  render() {
    return (
      <>
        <Text>Olá Firebase</Text>
        <Button
          onPress={() => { this.salvarDados(); }}
          title='Salvar Dados'
          color='#147'
          accessibilityLabel='Salvar Dados'
        />
        <Button
          onPress={() => { this.listarDados(); }}
          title='Listar Dados'
          color='#187'
          accessibilityLabel='Listar Dados'
        />
        <Text style={styles.value}>{this.state.pontuacao}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  value: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
  },
});
