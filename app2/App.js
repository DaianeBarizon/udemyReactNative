import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';


const ButtonPress = () => {
  alert('teste');
}

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>
        Title
      </Text>
      <Text style={styles.sectionContent}>
        Content
      </Text>
      <Text style={styles.sectionFooter}>
        Footer
      </Text>
      <Button
        onPress={ButtonPress}
        title='Clique aqui'
        color='#841548'
        accessibilityLabel='Clique para abrir as notícias!'
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonDescription}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#289d7d',
    flex: 1,
  },

  sectionHeader: {
    backgroundColor: '#123d7d',
    flex: 2,
  },

  sectionContent: {
    backgroundColor: '#176ed6',
    flex: 8,
  },

  sectionFooter: {
    backgroundColor: '#1349de',
    flex: 1,
  },

  button: {
    backgroundColor: '#2457d5',
    padding: 10,
    borderColor: '#df1256',
    borderWidth: 3,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 1,
    elevation: 5,
    margin: 14,
  },

  buttonDescription: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default App;
