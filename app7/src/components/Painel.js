import React, { Component } from 'react';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export default class Painel extends Component {
    constructor(props) {
        super(props);
        //variáveis de estado
        //Aqui eu construo o que quero manipular
        this.state = { num1: '10', num2: '15' };
    }

    calcular() {
        console.log('Vamos Calcular!');
    }

    render() {
        return (
            <>
                {/* Levando as duas propriedades do Componente do Painel para o Componente de Entrada */}
                <Entrada num1={this.state.num1} num2={this.state.num2} />
                <Operacao />
                <Comando calcula={this.calcular} />
            </>
        );
    }
}