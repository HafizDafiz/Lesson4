import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Exercise2 = () => {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>What We Do</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    greenBox: {
        width: 150,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center', // Center text vertically
        alignItems: 'center',     // Center text horizontally
    },
    boxText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold'
    }
});

export default Exercise2;

