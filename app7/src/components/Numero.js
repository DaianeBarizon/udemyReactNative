import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';

//recebe props
const Numero = (props) => (
    <TextInput
        style={styles.numero}
        placeholder='Número'
        value={props.num}
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