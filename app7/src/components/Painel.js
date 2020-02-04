import React from 'react';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = props => (
    <>
        <Entrada
            num1={props.num1}
            num2={props.num2}
            atualizaValor={props.atualizaValor}
        />
        <Operacao
            operacao={props.operacao}
            atualizaOperacao={props.atualizaOperacao}
        />
        <Comando calcular={props.calcular} />
    </>
)

export default Painel;