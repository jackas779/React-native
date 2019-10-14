import React from 'react';
import {Text,View,StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
 import {createStackNavigator } from 'react-navigation-stack'
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems,createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from 'react-navigation'
import Login from './Login';
import Registro from './Registrarse';
import Ingreso from './Ingreso'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Registros',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/portapapeles.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    };
  
    render() {
      return (
          <View style={styles.fondo}>
            <Image source={require('../assets/ingreso.png')} />
        </View>
      );
    }
  }
  
  class Sesion extends React.Component {
    static navigationOptions ={
      drawerLabel:'Cerrar Sesion',
      drawerIcon:({tintColor})=> (
        <Image
        source={require('../assets/finalizar-la-sesion.png')}
        style={[styles.icon,{tintColor:tintColor}]}
        />
      ),
    }
    render () {
      return (
        null
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    buton:{
        justifyContent:'center',
        width:150,
        backgroundColor:'red',
        borderRadius:51,
        height:30,
        alignSelf:'center',
        alignContent:'center'

    },
    text:{
        fontSize:20,
        alignSelf:'center',
        color:'white'
    },
    fondo:{
        justifyContent:'center',
        alignContent:'center',
        flex:1
    },
    icon:{
      width:24,
      height:24
    }
  });
  
  const MyDrawerNavigator = createDrawerNavigator({
    Homes: {
        screen: MyHomeScreen,
      },
      Notifications: {
        screen: Ingreso,
      },
      cerrar:{
        screen:Login, navigationOptions:{
          drawerLockMode:'locked-closed'
        }
      }
  });
  
  const MyApp = createAppContainer(MyDrawerNavigator);


module.exports =  MyApp;