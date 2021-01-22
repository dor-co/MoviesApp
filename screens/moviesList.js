import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Modal, FlatList, TouchableOpacity, Image } from 'react-native';
import MoviesAPI from '../api/moviesAPI';
import FavBtn from '../shared/favBtn';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function moviesList({navigation}) {

    const [movies, setMovies] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);

    let counter = navigation.getParam('updatedCount');

    if(counter === undefined){
        counter = 0;
    }    

    let favoriteMoviesList = navigation.getParam('modalList');
    if(favoriteMoviesList === undefined){
        favoriteMoviesList = [];
    }

    const [countFavorite, setCountFavorite] = useState(counter);

    useEffect(() => {
        getMovies()
        setCountFavorite(0)
    }, [])

    const getMovies = async() => {
        try {
        const response = await MoviesAPI.get('movie/popular?api_key=446a3341cdcb176c41d6d6cfde13d33a')
        setMovies(response.data)
        } catch {
            console.log(error)
        }
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.saveAndTitle}>
                <Text style={styles.counter}>{counter}</Text>
                <FavBtn style={styles.fav} onPress={() => setModalOpen(true)} />
            </View>
            <Text style={styles.welcome}>Welcome {navigation.getParam('first')} {navigation.getParam('last')}!</Text>
            <Text style={styles.popular}>Popular Movies</Text>

            <Modal visible={modalOpen} animationType='slide' >
                    <View>
                    <MaterialIcons style={styles.closeModal} name='close' onPress={() => setModalOpen(false)} />
                    <Text style={styles.modalText}>Favorite Movies List</Text>
                    <ScrollView>
                        <View style={styles.mainModal}>
                        <Text style={styles.favMovLst}>{favoriteMoviesList.join('\n\n')}</Text>
                        </View>
                    </ScrollView>
                    </View>
            </Modal>

            <FlatList data={movies.results}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return (
                            <View style={styles.background}>
                                <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {movieTitle: item.title, movieOverview: item.overview, movieRating: item.vote_average, movieImage: 'https://image.tmdb.org/t/p/w500' + item.poster_path,  count: counter, modalList: favoriteMoviesList})}>
                                    <View style={styles.cardView}>
                                        <Text style={styles.title}> {item.title}</Text>
                                        <Image style={styles.image} source = {{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: '#e3e3e3',
        margin: 20,
        borderRadius: 12,
        width: 300,
        alignSelf: 'center',
    },
    saveAndTitle: {
        flexDirection: 'row',
    },
    fav: {
        marginTop: 20,
        color: '#fff'
    },
    title: {
        marginHorizontal: 10,
        marginVertical: 5,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    image: {
        height: 350,
        width: 230,
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 30,
        alignSelf: 'center',
        borderRadius: 8,
    },
    counter:{
        fontSize: 22,
        marginRight: 5,
        color: '#fff',
    },
    background: {
        backgroundColor: '#445565',
    },
    popular: {
        backgroundColor: '#445565',
        fontSize: 40,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    },
    mainView: {
        padding: 10,
        paddingBottom: 100,
        backgroundColor: '#445565',
        marginBottom: 40,
    },
    closeModal: {
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 1,
        padding: 0,
        borderRadius: 50,
    },
    modalText: {
        fontSize: 35,
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
        padding: 5,
        marginTop: 5,
    },
    favMovLst: {
        fontSize: 20,
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    mainModal: {
        paddingBottom: 100,
    },  
    welcome: {
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    },
})
