import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

import logo from '../images/logo.png';
import btnJogar from '../images/botao_jogar.png';
import btnSobreJogo from '../images/sobre_jogo.png';
import btnOutrosJogos from '../images/outros_jogos.png';

export default class Main extends Component {
    render() {
        return (
            <>
                <View style={styles.background}>
                    <View style={styles.header}>
                        <Image style={styles.logo} source={logo} />
                        <TouchableHighlight title='Jogar' underlayColor={'#b9c941'} activeOpacity={1} onPress={() => this.props.navigation.navigate('Jogo')}>
                            <Image style={styles.btnJogar} source={btnJogar} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.footer}>
                        <TouchableHighlight title='Sobre Jogo' underlayColor={'#b9c941'} activeOpacity={1} onPress={() => this.props.navigation.navigate('Sobre')}>
                            <Image style={styles.btnSobreJogo} source={btnSobreJogo} />
                        </TouchableHighlight>
                        <TouchableHighlight title='Outros Jogos' underlayColor={'#b9c941'} activeOpacity={1} onPress={() => this.props.navigation.navigate('Outros')}>
                            <Image style={styles.btnOutrosJogos} source={btnOutrosJogos} />
                        </TouchableHighlight>
                    </View>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#61bd8c',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    header: {
        alignItems: 'center',
        marginTop: 100,
    },
    logo: {

    },
    btnJogar: {
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
    },
    btnSobreJogo: {
        marginRight: 10,
    },
    btnOutrosJogos: {
        marginLeft: 10,
    },
});
