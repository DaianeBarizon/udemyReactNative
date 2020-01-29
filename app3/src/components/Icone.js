import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

class Icone extends Component {
    render() {
        if (this.props.escolha == 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.jogador}>{this.props.jogador}</Text>
                    <Image source={require('../../images/pedra.png')} />
                </View>
            );
        } else if (this.props.escolha == 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.jogador}>{this.props.jogador}</Text>
                    <Image source={require('../../images/tesoura.png')} />
                </View>
            );
        } else if (this.props.escolha == 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.jogador}>{this.props.jogador}</Text>
                    <Image source={require('../../images/papel.png')} />
                </View>
            );
        } else {
            return false;
        }
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20,
        fontSize: 18,
    },
    jogador: {
        fontSize: 20,
    }
});

export default Icone;