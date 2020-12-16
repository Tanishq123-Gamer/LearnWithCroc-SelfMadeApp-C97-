import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import {Icon} from 'react-native-elements'

import SettingScreen from '../Screens/SettingScreen';
import HomeScreen from '../Screens/HomeScreen'
import { RFValue } from "react-native-responsive-fontsize";
import CustomSideBarManu from './CustomSideBarMenu'
import English from '../Screens/English';
import Maths from '../Screens/Maths';
import AnimalSound from '../Screens/AnimalSound';


export const AppDrawerNavigator = createDrawerNavigator(
    {       

        Home: { screen : HomeScreen, navigationOptions:{drawerIcon: <Icon name='home' type='fontAwesome5'/>} },
        Setting : { screen : SettingScreen ,navigationOptions:{drawerIcon: <Icon name='settings' type='fontAwesome5'/>}},
        Phonics : { screen : English ,navigationOptions:{drawerIcon: <Icon name='book' type='fontAwesome5'/>}},
        Maths  : { screen : Maths ,navigationOptions:{drawerIcon: <Icon name='book' type='fontAwesome5'/>}},
        AnimalSound : { screen : AnimalSound ,navigationOptions:{drawerIcon: <Icon name='book' type='fontAwesome5'/>}},
        
    },
    {
        contentComponent: CustomSideBarManu
    },

    {
        initialRouteName : 'Home'
    }
);
