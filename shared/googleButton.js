import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function GoogleButton({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}><AntDesign style={styles.googleLogo} name="google" size={24}/> { text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        width: 270,
        backgroundColor: '#d34836',
        padding: 8,
        marginTop: 20,
    },
    buttonText:{
        color: '#fff',
        fontSize: 25,
        alignSelf: 'center',
    },
    googleLogo: {
        color: '#fff',
    },
})