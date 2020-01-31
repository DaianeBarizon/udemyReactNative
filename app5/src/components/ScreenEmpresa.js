import React, { Component } from 'react';
import {
    StatusBar,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

import ScrollNavigation from './ScrollNavigation';

const detalheEmpresa = require('../images/detalhe_empresa.png');

export default class ScreenEmpresa extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='#cccccc' />
                <ScrollNavigation />
                <View style={styles.image}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.text}>A Empresa</Text>
                </View>
                <View style={styles.empresa}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    text: {
        color: '#EC7148',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    empresa: {
        margin: 20,
    },
});

