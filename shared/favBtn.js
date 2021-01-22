import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FavoriteButton({ onPress, isFavorite }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <AntDesign name="hearto" size={35} color={isFavorite ? 'red' : 'white'}/>
            </View>
        </TouchableOpacity>
    );
}

