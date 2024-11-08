import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Exercise3a = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
                <Text style>Child one</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
                <Text style>Child two</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
                <Text style>Child three</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    Child: {
        borderWidth: 2,
        borderColor: '#000',
        width: 110,
        height: 70,
        justifyContent: 'center',
    },
});

export default Exercise3a;
