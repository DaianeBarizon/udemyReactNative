import React, { Component } from 'react';
import firebase from 'firebase';

import {
  View,
  Text,
  Button,
} from 'react-native';

export default class App extends Component {
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
    var database = firebase.database();
    //atualizar
    //database.ref('pontuacao').set(100);
    //remover
    database.ref('pontuacao').remove();
  }

  render() {
    return (
      <>
        <View><Text>Olá</Text></View>
        <Button onPress={() => { this.salvarDados(); }} title='Salvar Dados' color='#147' accessibilityLabel='Salvar Dados' />
      </>
    );
  }
}
