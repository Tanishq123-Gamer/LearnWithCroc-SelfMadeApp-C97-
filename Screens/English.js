import React,{Component}from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../db_p';
import PhonicSoundButton from '../components/PhonicSoundButton';

export default class English extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render(){
    return (
      <ImageBackground source= {require("../assets/Phonics_back.jpeg")} style={styles.container}>
            <MyHeader title="Phonics!" navigation ={this.props.navigation}/>

            <Image
          style={styles.imageIcon}
          source={require("../assets/Phonic_logo.png")}
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
              db[word]
                ? (this.setState({ chunks: db[word].chunks }),
                  this.setState({ phonicSounds: db[word].phones }))
                : alert('word is not present in our database');
            }}>
            <Text style={styles.buttonText}>GO</Text>
            </TouchableOpacity>

                <View>
                {this.state.chunks.map((item, index) => {
                  return (
                    <PhonicSoundButton
                      wordChunk={this.state.chunks[index]}
                      soundChunk={this.state.phonicSounds[index]}
                    />
                  );
                })}
                </View>
</ImageBackground>

);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
},
inputBox: {
marginTop: 40,
width: '80%',
alignSelf: 'center',
height: 40,
textAlign: 'center',
borderWidth: 2.5,
outline: 'none',
backgroundColor:'whitesmoke',
borderRadius: 20,
boxShadow:'2px 2px'
},
goButton: {
width: '50%',
height: 55,
alignSelf: 'center',
padding: 10,
margin: 10,
},
buttonText: {
textAlign: 'center',
fontSize: 30,
fontWeight: 'bold',
},
imageIcon: {
width: 200,
height: 200,
alignSelf:"center"
},
});
