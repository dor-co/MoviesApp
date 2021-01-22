import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Alert, Modal, ScrollView, TextInput } from 'react-native';
import GoogleButton from '../shared/googleButton';
import GuestButtom from '../shared/guestButton';
import { MaterialIcons } from '@expo/vector-icons';
import SubmitBtn from '../shared/submitBtn';
export default function login({navigation}) {

    const [modalOpen, setModalOpen] = useState(false);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
    const googleLoginPress = () => {
      Alert.alert('Error!', 'Sorry, Google login is not available right now', [{text: 'ok'}])
  }

    const submitPress = () => {
      if(firstname === '' || lastname === ''){
        Alert.alert('Error!', 'Please fill in all the text fields', [{text: 'ok'}])
      } else{
        setFirstname(' ' + firstname + ' ')
        setLastname(lastname)
        setModalOpen(false)
        navigation.navigate('MoviesList', {first: firstname, last: lastname});
      }
  }

    return (
      <View style={styles.container}>
        <Image source={require('../assets/Film-and-Popcorn.png')} style={styles.logoImage}/>
        <Text style={styles.helloText}>Hello guest, welcome to AppMovies</Text>
        <Image source={require('../assets/defaultProfileImg.png')} style={styles.image}/>
        <Text style={styles.helloText}>Please login to enter the App</Text>
        <View style={styles.loginButtons}>
            <GuestButtom text='Login as a guest' onPress={() => setModalOpen(true)} />
            <GoogleButton text='Google Login' onPress={googleLoginPress} />
        </View>

        <Modal visible={modalOpen} animationType='slide' >
          <View>
              <MaterialIcons style={styles.closeModal} name='close' onPress={() => setModalOpen(false)} />
              <Text style={styles.modalText}>Personal Details</Text>
              <ScrollView>
                <View>
                  <TextInput placeholder='Enter your first name' style={styles.firstnameInput} onChangeText={(val) => setFirstname(val)}/>
                  <TextInput placeholder='Enter your last name' style={styles.lastnameInput} onChangeText={(val) => setLastname(val)}/>
                    <SubmitBtn text='Submit' onPress={submitPress} />
                </View>
              </ScrollView>
            </View>
          </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#445565',
      alignItems: 'center',
      padding: 20,
    },  
    logoImage: {
      height: 180,
      width: 270
    },  
    loginButtons: {
        width: 250,
        position: 'absolute',
        bottom: 30,
        flexDirection: 'column',
    },
    image: {
        width: 140,
        height: 140,
        marginTop: 10,
    },
    logo: {
        fontSize: 40,
    },
    helloText: {
      fontSize: 19,
      textAlign: 'center',
      marginTop: 10,
      color: '#fff',
    },
    modalText: {
      fontSize: 35,
      marginBottom: 10,
      color: '#000',
      textAlign: 'center',
      padding: 5,
      marginTop: 5,
    },
    closeModal: {
      fontSize: 40,
      alignSelf: 'center',
      marginTop: 10,
      borderWidth: 1,
      padding: 0,
      borderRadius: 50,
    },
    firstnameInput: {
      marginTop: 50,
      alignSelf: 'center',
      padding: 8,
      borderRadius: 8,
      fontSize: 20,
      height: 40,
      width: 250,
      backgroundColor: '#e1e1e1',
    },
    lastnameInput: {
      marginTop: 20,
      alignSelf: 'center',
      padding: 8,
      borderRadius: 8,
      fontSize: 20,
      height: 40,
      width: 250,
      backgroundColor: '#e1e1e1',
    },
  });