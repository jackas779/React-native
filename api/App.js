import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack'
import Contrasena from './paginas/Contrasena';
import Login from './paginas/Login';
import Registro from './paginas/Registrarse';
import Ingreso from './paginas/Ingreso'


 const Paginas = createStackNavigator ({
   Home: {screen:Login,  
     navigationOptions: {
    header: null 
  }
},
   Register: {screen:Registro, navigationOptions: {
    header: null 
  }},
   Contrans: {screen:Contrasena, navigationOptions: {
    header: null 
  }},
   Ingres : { screen:Ingreso, navigationOptions: {
    header: null 
  }}
  },
 
 {
   initialRouteName: 'Home',

 });
 const api= createAppContainer(Paginas);

 export default api;