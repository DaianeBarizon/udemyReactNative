import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ScrollNavigation extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>ATM Consultoria</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 70,
    },
    text: {
        color: '#000000',
        fontSize: 18,
        textAlign: 'center',
    },
});
