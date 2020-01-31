import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ScrollNavigation extends Component {
    render() {
        return (
            <View style={[styles.header, { backgroundColor: this.props.backgroundColor }]}>
                <Text style={styles.text}>ATM Consultoria</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 70,
    },
    text: {
        color: '#ffffff',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
