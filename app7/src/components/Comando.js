import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

const Comando = () => (
    <Text style={styles.text}>Eu sou o Comando!</Text>
)

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#475',
        color: '#fff',
    },

});

export default Comando;