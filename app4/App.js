import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import Listitens from './src/components/Listitens';

export default class App extends Component {
    render() {
        return (
            <View>
                <Listitens />
            </View>
        );
    }
}
