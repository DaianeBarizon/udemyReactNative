import React, { Component } from 'react';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export default class Painel extends Component {
    constructor(props) {
        super(props);
        //variáveis de estado
        //Aqui eu construo o que quero manipular
        this.state = { num1: '', num2: '' };
        //Quando a função calcular chega no componente comando não encontra as variáveis num1 e num2
        //Então utiliza o bind para preservar o contexto de execução da função
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
    }

    calcular() {
        const calcula = parseFloat(this.state.num2) + parseFloat(this.state.num1);
        console.log(calcula);
    }

    atualizaValor(nomeCampo, numero) {
        const obj = {};
        obj[nomeCampo] = numero;
        this.setState(obj);
    }

    render() {
        return (
            <>
                {/* Levando as duas propriedades do Componente do Painel para o Componente de Entrada */}
                <Entrada
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atualizaValor={this.atualizaValor}
                />
                <Operacao />
                <Comando calcula={this.calcular} />
            </>
        );
    }
}