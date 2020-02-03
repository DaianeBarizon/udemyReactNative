import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

const cara = require('../images/moeda_cara.png');
const coroa = require('../images/moeda_coroa.png');

export default class Jogo extends Component {
    constructor(props) {
        super(props);
        this.state = { resultado: '' };
    }

    UNSAFE_componentWillMount() {
        const numAletorio = Math.floor(Math.random() * 2);
        let caraOuCoroa = '';

        if (numAletorio === 0) {
            caraOuCoroa = 'cara';
        } else {
            caraOuCoroa = 'coroa';
        }

        this.setState({ resultado: caraOuCoroa })
    }

    render() {
        if (this.state.resultado === 'cara') {
            return (
                <View style={styles.background}>
                    <Image source={cara} />
                </View>
            );
        } else {
            return (
                <View style={styles.background}>
                    <Image source={coroa} />
                </View>
            );
        }
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

