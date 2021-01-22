import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function SubmitBtn({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        width: 170,
        backgroundColor: '#7DBCEE',
        padding: 8,
        alignSelf: 'center',
        marginTop: 40,
    },
    buttonText:{
        color: '#fff',
        fontSize: 25,
        alignSelf: 'center',
    },
})