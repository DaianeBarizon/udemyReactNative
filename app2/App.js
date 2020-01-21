import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const newPhrasesRandom = () => {
  var numberRandom = Math.random();
  numberRandom = Math.floor(numberRandom * 5);

  var phrases = Array();
  phrases[0] = 'Não é a linguagem de programação que define o programador, mas sim sua lógica.';
  phrases[1] = 'Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero.';
  phrases[2] = 'Faça da sua vida mais "Responsivo"';
  phrases[3] = 'Programador: “É simples, pode ser composto. Se firma no concreto e torna-se, abstrato.”';
  phrases[4] = 'É certo que um programador saiba unir cabos, melhor quando os corticoides humanos temporais sejam sentidos a dedo.';

  var phraseChosen = phrases[numberRandom];
  Alert.alert(phraseChosen);
}

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image source={require('./imagens/logo.png')} />
      <TouchableOpacity
        onPress={newPhrasesRandom}
        style={styles.sectionButton}>
        <Text style={styles.sectionButtonDescription}>Nova Frase</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionButton: {
    backgroundColor: '#538530',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40,
    marginTop: 20,
  },
  sectionButtonDescription: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
