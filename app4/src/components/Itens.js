import React, { Component } from 'react';
import { Text, View, Image } from "react-native";

export default class Itens extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: this.props.item.foto }} style={{ width: 100, height: 100 }} />
                <Text>{this.props.item.titulo}</Text>
                <Text>{this.props.item.valor}</Text>
                <Text>{this.props.item.local_anuncio}</Text>
                <Text>{this.props.item.data_publicacao}</Text>
            </View>
        );
    }
}