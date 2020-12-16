import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView, Image} from 'react-native';
    import { RFValue } from "react-native-responsive-fontsize";
    import MyHeader from '../components/MyHeader'


export default class Maths extends Component {
  constructor() {
    super();
    this.state = {
      
      text: '',
     
      name: '',
    };
  }
  render(){
    return (
      <ImageBackground source= {require("../assets/Math_back.jpg")} style={styles.container}>
      <MyHeader title="Maths" navigation ={this.props.navigation}/>

      <View style={{margin:20}}>
      <Image
          style={styles.imageIcon}
          source={require("../assets/supportercroc.png")}
        />
        </View>
      
      <TouchableOpacity
            style={styles.button}
           onPress = {()=>{ this.props.navigation.navigate("NumberNames")}}
          >
            <Text style={styles.buttonText}>Number Names</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress = {()=>{ this.props.navigation.navigate("PlaceValue")}}
          >
            <Text style={styles.buttonText}>Place Value of Numbers</Text>
          </TouchableOpacity>
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
    button: {
      width: "80%",
      height: RFValue(50),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(20),
      backgroundColor: "#ffff",
      shadowColor: "#000",
      marginBottom:RFValue(10),
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText: {
      color: "#32867d",
      fontWeight: "200",
      fontSize: RFValue(10),
    },
    imageIcon: {
      width: 150,
      height: 150,
      alignSelf: 'center',
    },
  });
  