import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView, ImageBackground, Image} from 'react-native';
import MyHeader from '../components/MyHeader'
import db_a from '../db_a';
import AnimalSoundButton from '../components/soundButton';
import firebase from 'firebase';

export default class AnimalSound extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      soundName: null,
      sound: '',
    };
  }
  render(){
    return (     

        <ImageBackground source= {require("../assets/animal_back.jpg")} style={styles.container}>
            <MyHeader title="Animal Sound" navigation ={this.props.navigation}/>

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />
      
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db_a[word]
              ? (this.setState({ soundName: db_a[word].sound }),
                this.setState({ sound: db_a[word].uri }))
              : alert('The word does not exist in our database');
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {(this.state.soundName != null)? (
            <AnimalSoundButton
              wordChunk={this.state.soundName}
              soundChunk={this.state.sound}
            />
          ) : null}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
    width: '100%',
    height: '100%',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    fontSize:20,
    borderWidth: 4,
    outline: 'none',
    borderRadius:20,
    backgroundColor:'whitesmoke'
  },
  goButton: {
    width: '30%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 20,
    backgroundColor: 'green',
    borderWidth: 4,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color:'yellow'
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});
