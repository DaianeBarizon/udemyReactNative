import React, { Component } from 'react';
import {
    StatusBar,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

import ScrollNavigation from './ScrollNavigation';

const detalheContato = require('../images/detalhe_contato.png');

export default class ScreenContato extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='#61BD8C' />
                <ScrollNavigation backgroundColor='#61BD8C' />
                <View style={styles.image}>
                    <Image source={detalheContato} />
                    <Text style={styles.text}>Contato</Text>
                </View>
                <View style={styles.contato}>
                    <Text style={styles.textContato}>TEL: +55 (24) 9887567-5432</Text>
                    <Text style={styles.textContato}>CEL: +55 (24) 2245-8957</Text>
                    <Text style={styles.textContato}>contato@atmconsultoria.com.br</Text>
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
        color: '#61BD8C',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    contato: {
        margin: 20,
    },
    textContato: {
        margin: 10,
    },
});

