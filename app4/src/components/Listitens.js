import React, { Component } from 'react';
import { Text, View } from "react-native";

export default class Listitens extends Component {
    constructor(props) {
        super(props);
        console.log('construindo a aplicação');
    }

    UNSAFE_componentWillMount() {
        console.log('Fazer alguma coisa antes da renderização');
    }

    componentDidMount() {
        console.log('Fazer alguma coisa depois da renderização');
    }
    render() {
        console.log('renderização');
        return (
            <View>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}
