import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView, ImageBackground} from 'react-native';
    import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  render(){
    return (   
      
        
        <ImageBackground source={require("../assets/flowerbackimg.jpg")} style={styles.container}>
          <MyHeader title="Home Page" navigation ={this.props.navigation}/>
        
       
          <Text style={{color: "#32867d", fontSize:20, fontWeight:"bold",justifyContent:"center", margin:30}}>
          It shouldn't matter how slowly a child learns as long as we are encouraging them not to stop. 
        </Text>  

       
            

       
          <Text style={{color: "#32867d", fontSize:20, fontWeight:"bold",justifyContent:"center", margin:10}}>
          Click on the buttons to see what"s inside! 
          Check it out and Learn what you desire!
        </Text>

      
        
      
        
          <TouchableOpacity 
            style={styles.button}
           onPress = {()=>{ this.props.navigation.navigate("AnimalSound")}}
          >
            <Text style={styles.buttonText}>Animals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress = {()=>{ this.props.navigation.navigate("Maths")}}
          >
            <Text style={styles.buttonText}>Maths</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress = {()=>{ this.props.navigation.navigate("Phonics")}}
           
          >
            <Text style={styles.buttonText}>Phonics!</Text>
          </TouchableOpacity>
          

        
          <Image
          source={require('../assets/supportercroc.png')}
          style={styles.santaImage}
           /> 
        

         
        </ImageBackground>
      
     
      
    );
  }
  
  }
  
  const styles = StyleSheet.create({
  
      container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#b8b8b8',
      },
    
    button: {
      width: "60%",
      height: RFValue(50),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(20),
      backgroundColor: "#ffff",
      shadowColor: "#000",
      alignSelf:"center",
      marginBottom:RFValue(20),
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
   
    santaImage:{
      width:150,
      height:150,
      marginTop:170,
      marginLeft:RFValue(280)
    
    },
  });