import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Viewfinder = () => (
    <View style={styles.container}>
        <TextInput style={styles.input}
            placeholder='Resultado'
            editable={false}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        fontSize: 30,
    },

});

export default Viewfinder;