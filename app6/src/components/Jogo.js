import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

var randomImages = [
    require('../images/moeda_cara.png'),
    require('../images/moeda_coroa.png')
];

export default class Jogo extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Image source={randomImages[Math.floor(Math.random() * randomImages.length)]} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#61bd8c',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

