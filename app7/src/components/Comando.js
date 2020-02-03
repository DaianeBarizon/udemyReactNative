import React from 'react';
import {
    StyleSheet,
    Button,
} from 'react-native';

const Comando = () => (
    <Button style={styles.text} title='calcular' />
)

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#475',
        color: '#fff',
    },

});

export default Comando;