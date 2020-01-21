import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

// const ButtonPress = () => {
//   alert('teste');
// }

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image source={require('./imagens/logo.png')} />
      <TouchableOpacity style={styles.sectionButton}>
        <Text style={styles.sectionButtonDescription}>Nova Frases</Text>
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
