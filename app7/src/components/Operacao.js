import React from 'react';
import {
    StyleSheet,
    Picker,
} from 'react-native';

const Operacao = () => (
    <Picker
        style={styles.container}
    >
        <Picker.Item label="soma" value="soma" />
        <Picker.Item label="subtração" value="subtração" />
    </Picker>
);

const styles = StyleSheet.create({
    container: {
        color: '#000',
        marginBottom: 15,
        marginTop: 15,
    },

});

export default Operacao;