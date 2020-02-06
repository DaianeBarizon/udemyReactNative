import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

const FormCadastro = (props) => {
    console.log(props)
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput value={props.nome} placeholder="Nome" style={{ fontSize: 20, height: 45 }} />
                <TextInput value={props.email} placeholder="E-mail" style={{ fontSize: 20, height: 45 }} />
                <TextInput value={props.senha} placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title="Cadastrar" color="#115E54" onPress={() => false} />
            </View>
        </View>
    );
}

const mapStateProps = state => (
    {
        nome: state.authReducers.nome,
        email: state.authReducers.email,
        senha: state.authReducers.senha
    }
)

export default connect(mapStateProps, null)(FormCadastro);