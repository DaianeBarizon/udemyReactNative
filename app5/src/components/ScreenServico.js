import React, { Component } from 'react';
import {
    StatusBar,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

import ScrollNavigation from './ScrollNavigation';

const detalheServico = require('../images/detalhe_servico.png');

export default class ScreenServico extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='#19d1c8' />
                <ScrollNavigation backgroundColor='#19d1c8' />
                <View style={styles.image}>
                    <Image source={detalheServico} />
                    <Text style={styles.text}>Nossos Serviços</Text>
                </View>
                <View style={styles.servico}>
                    <Text>. Consultoria</Text>
                    <Text>. Processos</Text>
                    <Text>. Acompanhamentos de Projetos</Text>
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
        color: '#19d1c8',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    servico: {
        margin: 20,
    },
});

