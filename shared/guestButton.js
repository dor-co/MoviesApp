import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Zocial } from '@expo/vector-icons'; 

export default function GuestButtom({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}><Zocial style={styles.guestLogo} name="guest" size={24} color="white"/> { text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        width: 270,
        backgroundColor: '#81C366',
        padding: 8,
        marginTop: 15,
    },
    buttonText:{
        color: '#fff',
        fontSize: 25,
        alignSelf: 'center',
    },
    guestLogo: {
        color: '#fff',
    },
})