import React, { Component } from 'react';
import {
    StyleSheet,
    Picker,
} from 'react-native';

export default class Operacao extends Component {
    constructor(props) {
        super(props);
        this.state = { operacao: '' };
    }
    render() {
        return (
            <Picker
                style={styles.container}
                selectedValue={this.state.operacao}
                onValueChange={op => { this.setState({ operacao: op }) }}
            >
                <Picker.Item label="soma" value="soma" />
                <Picker.Item label="subtração" value="subtração" />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        color: '#000',
        marginBottom: 15,
        marginTop: 15,
    },

});