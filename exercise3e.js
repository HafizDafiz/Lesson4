import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Exercise3d = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>
                <Text style>Child One</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'skyblue', flex: 2}]}>
                <Text style>Child Two</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'steelblue', flex: 3}]}>
                <Text style>Child Three</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        //justifyContent: 'flex-start',
        //justifyContent: 'flex-end',
        //justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    }
});

export default Exercise3d;
