import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Viewfinder extends Component {
    constructor(props) {
        super(props);
        this.state = { resultado: '' };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Resultado'
                    value={this.state.resultado}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        fontSize: 30,
    },

});
