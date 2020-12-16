
import React,{Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreen';
import NumberNames from './Screens/NumberNames';
import PlaceValue from './Screens/PlaceFaceValue';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default class  App extends Component {
  render(){
    return (
      <AppContainer/>
    );
  }
  
}

const switchNavigator = createSwitchNavigator({
  Welcome: {screen : WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  NumberNames: {screen : NumberNames},
  PlaceValue: {screen: PlaceValue}
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
