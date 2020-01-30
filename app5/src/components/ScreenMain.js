import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import ScrollNavigation from './ScrollNavigation';
const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuServico = require('../images/menu_servico.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuContato = require('../images/menu_contato.png');

export default class ScreenMain extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='#cccccc' />
                <ScrollNavigation />
                <View style={styles.main}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View style={styles.main}>
                    <View style={styles.container}>
                        <Image style={styles.image} source={menuCliente} />
                        <Image style={styles.image} source={menuServico} />
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.image} source={menuEmpresa} />
                        <Image style={styles.image} source={menuContato} />
                    </View>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    logo: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        margin: 20,
    },
});
