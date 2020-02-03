import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

const Operacao = () => (
    <Text style={styles.text}>Eu sou Operacao!</Text>
)

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#475',
        color: '#fff',
    },

});

export default Operacao;