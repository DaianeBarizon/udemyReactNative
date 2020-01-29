import React, { Component } from 'react';
import { View, Text } from "react-native";

import Itens from './Itens';
import axios from 'axios';

export default class Listitens extends Component {
    constructor(props) {
        super(props);
        this.state = { listitens: [] };
    }

    UNSAFE_componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listitens: response.data }) })
            .catch(() => { console.log('Erro ao recuperar os dados') });
    }

    render() {
        return (
            <View>
                <Itens />
                {this.state.listitens.map(item => (<Text key={item.titulo}>{item.titulo}</Text>))}
            </View>
        );
    }
}
