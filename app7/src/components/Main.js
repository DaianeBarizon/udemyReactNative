import React, { Component } from 'react';

import Header from './Header';
import Result from './Results';
import Painel from './Painel';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        var resultado = 0;

        switch (this.state.operacao) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                console.log(resultado);
                break;
            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                console.log(resultado);
                break;
            default:
                resultado = 0;
        }

        this.setState({ resultado: resultado.toString() })
    }

    atualizaOperacao(operacao) {
        this.setState({ operacao })
    }

    atualizaValor(nomeCampo, numero) {
        const obj = {};
        obj[nomeCampo] = numero;
        this.setState(obj);
    }

    render() {
        return (
            <>
                <Header />
                <Result resultado={this.state.resultado} />
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    calcular={this.calcular}
                    atualizaValor={this.atualizaValor}
                    atualizaOperacao={this.atualizaOperacao}
                />
            </>
        );
    }
}