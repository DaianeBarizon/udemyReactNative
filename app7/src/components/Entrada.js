import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Numero from './Numero';

//Recuperando a props do Componente Pai 'Painel'
const Entrada = (props) => (
    <View style={styles.container}>
        {/* Recebendo por propriedade as informações do Componente Pai 'Painel' */}
        <Numero num={props.num1} />
        <Numero num={props.num2} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
});

export default Entrada;