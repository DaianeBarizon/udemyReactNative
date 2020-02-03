import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Numero from './Numero';

const Entrada = () => (
    <View style={styles.container}>
        <Numero />
        <Numero />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
});

export default Entrada;