import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default class Painel extends Component {
    render() {
        return (
            <>
                <Text style={styles.text}>Eu sou o Painel!</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#475',
        color: '#fff',
    },

});