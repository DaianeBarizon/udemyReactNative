import React, { Component } from 'react';
import {
    StatusBar,
    Image,
    Text,
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
                <Image source={detalheCliente} />
                <Text>Nossos Clientes</Text>
                <Image source={cliente1} />
                <Text>Lorem Ipsum Dolor</Text>
                <Image source={cliente2} />
                <Text>Lorem Ipsum Dolor</Text>
            </>
        );
    }
};


