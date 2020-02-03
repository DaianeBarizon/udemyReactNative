import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default class Result extends Component {
    render() {
        return (
            <>
                <Text style={styles.text}>Eu sou o Resultado!</Text>
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