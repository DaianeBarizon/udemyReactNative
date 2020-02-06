//action create email
export const modificaEmail = (texto) => {
    console.log(texto);
    //O return é o action
    return {
        type: 'modifica_email',
        payload: texto
    }
}

//action create senha
export const modificaSenha = (texto) => {
    console.log(texto);
    //O return é o action
    return {
        type: 'modifica_senha',
        payload: texto
    }
}