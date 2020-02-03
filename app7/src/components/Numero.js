import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';

const Numero = () => (
    <TextInput
        style={styles.numero}
        placeholder='Número'
    />
)

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20
    },

});

export default Numero;