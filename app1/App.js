import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const gerarNumeroRandom = () => {
  var num_random = Math.random();
  num_random = Math.floor(num_random * 10);

  alert(num_random);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de Números Randômicos</Text>
      <Button
        title='Gerar um random'
        onPress={gerarNumeroRandom}
      />
    </View>
  )
};

export default App;
