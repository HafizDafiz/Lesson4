import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Exercise3c = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90 }]}>
                <Text style>Child One</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
                <Text style>Child Two</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>
                <Text style>Child Three</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5
    },
    child: {
        flex: 1,
        borderWidth: 2,
        textAlign: 'center'
    }
});

export default Exercise3c;
