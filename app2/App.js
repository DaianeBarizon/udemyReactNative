import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
});

export default App;
