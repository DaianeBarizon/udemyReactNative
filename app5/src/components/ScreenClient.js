import React, { Component } from 'react';
import {
    StatusBar,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

import ScrollNavigation from './ScrollNavigation';

const detalheCliente = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');

export default class ScreenClient extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='#cccccc' />
                <ScrollNavigation />
                <View style={styles.image}>
                    <Image source={detalheCliente} />
                    <Text style={styles.text}>Nossos Clientes</Text>
                </View>
                <View style={styles.client}>
                    <Image source={cliente1} />
                    <Text style={styles.textClient}>Lorem Ipsum Dolor</Text>
                </View>
                <View style={styles.client}>
                    <Image source={cliente2} />
                    <Text style={styles.textClient}>Lorem Ipsum Dolor</Text>
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
        color: '#b9c941',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    },

    client: {
        margin: 20,
    },
    textClient: {
        margin: 10,
    },
});

