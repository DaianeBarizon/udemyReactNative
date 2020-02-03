import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Topo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Calculadora</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#475',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    }
});