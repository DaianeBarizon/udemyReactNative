import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
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
                <ScrollNavigation backgroundColor='#cccccc' />
                <View style={styles.main}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View style={styles.main}>
                    <View style={styles.container}>
                        <TouchableHighlight title='Cliente' underlayColor={'#b9c941'} activeOpacity={1} onPress={() => this.props.navigation.navigate('Clientes')}>
                            <Image style={styles.image} source={menuCliente} />
                        </TouchableHighlight>
                        <TouchableHighlight title='Serviços' underlayColor={'#19d1c8'} activeOpacity={1} onPress={() => this.props.navigation.navigate('Serviços')}>
                            <Image style={styles.image} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.container}>
                        <TouchableHighlight title='Empresa' underlayColor={'#EC7148'} activeOpacity={1} onPress={() => this.props.navigation.navigate('Empresa')}>
                            <Image style={styles.image} source={menuEmpresa} />
                        </TouchableHighlight>
                        <TouchableHighlight title='Contato' underlayColor={'#61BD8C'} activeOpacity={1} onPress={() => this.props.navigation.navigate('Contato')}>
                            <Image style={styles.image} source={menuContato} />
                        </TouchableHighlight>
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
