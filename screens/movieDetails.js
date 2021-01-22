import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import FavBtn from '../shared/favBtn';
import { ScrollView } from 'react-native-gesture-handler';

export default function movieDetails({ navigation: movie }) {

  const [isFavorite, setIsFavorite] = useState(false);

  const [updatedCountFavorite, setUpdatedCountFavorite] = useState(0);

  let counter = movie.getParam('count');

  let favoriteMoviesList = movie.getParam('modalList')

  const movieImage = movie.getParam('movieImage');

  let index;

  const onFavoriteClick = async() => {
    try{
      if(favoriteMoviesList.includes(movie.getParam('movieTitle')) === true){
        counter--
        index = favoriteMoviesList.indexOf(movie.getParam('movieTitle'));
        favoriteMoviesList.splice(index, 1);
        setUpdatedCountFavorite(counter)
        Alert.alert('Oh no!', 'You removed ' + movie.getParam('movieTitle') + ' from your favorite list!', [{text: 'ok', onPress: () => movie.navigate('MoviesList', {updatedCount: counter, modalList: favoriteMoviesList})}])
      } else {
        counter++
        setUpdatedCountFavorite(counter)
        favoriteMoviesList.push(movie.getParam('movieTitle'))
        Alert.alert('Congratulation!', 'You added ' + movie.getParam('movieTitle') + ' to your favorite list!', [{text: 'ok', onPress: () => movie.navigate('MoviesList', {updatedCount: counter, modalList: favoriteMoviesList})}])
      }
      setIsFavorite(!isFavorite)
      
    } catch{
      console.log(movie.getParam('add to favorite not success'))
    }
  }

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Movie Details</Text>
        <ScrollView>
            <Text style={styles.title}>{movie.getParam('movieTitle')}</Text>
            <Image style={styles.image} source = {{uri: movieImage}}/>
            <Text style={styles.overview}>{movie.getParam('movieOverview')}</Text>
            <View style={styles.ratAndFav}>
              <Text style={styles.vote}>{movie.getParam('movieRating')}</Text>
              <FavBtn style={styles.fav} onPress={onFavoriteClick} isFavorite={isFavorite} />
            </View>
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#445565',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        backgroundColor: '#445565',
        fontSize: 40,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    },
    title: {
        marginTop: 15,
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
    },
    overview: {
        fontSize: 17,
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        color: '#fff',
        bottom: 30,
    },
    vote: {
        fontSize: 25,
        marginEnd: 30,
        color: '#fff',
        textAlign: 'center',
    },
    ratAndFav: {
        marginTop: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    fav: {
        marginStart: 30,
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
    });