import React from 'react';
import {
    StyleSheet,
    Button,
} from 'react-native';

const Comando = (props) => (
    <Button
        style={styles.text}
        title='calcular'
        onPress={props.calcular}
    />
)

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#475',
        color: '#fff',
    },

});

export default Comando;