import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from "react-native";

export default class Itens extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.item.foto }} style={styles.produto} />
                <View style={styles.itens}>
                    <Text style={styles.titulo}>{this.props.item.titulo}</Text>
                    <Text style={styles.valor}>{this.props.item.valor},00</Text>
                    <Text>{this.props.item.local_anuncio}</Text>
                    <Text>{this.props.item.data_publicacao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 5,
        flexDirection: 'row',
    },
    produto: {
        width: 120,
        height: 120,
        margin: 10,
    },
    itens: {
        flex: 1,
    },
    titulo: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    valor: {
        color: 'red',
        fontSize: 25,
    }
});