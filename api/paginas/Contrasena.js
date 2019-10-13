import React from 'react';
import {Text,View,StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
 import {createStackNavigator } from 'react-navigation-stack'
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems,createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from 'react-navigation'
import Login from './Ingreso';
import Registro from './Registrarse';
import Ingreso from './Ingreso'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/iconlogin.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    };
  
    render() {
      return (
          <View style={styles.fondo}>

        <TouchableOpacity style={styles.buton}
          onPress={() => this.props.navigation.navigate('Register')}
        ><Text style={styles.text}>IR AL REGISTRO</Text></TouchableOpacity>
        </View>
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/iconlogin.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
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
        alignContent:'center'
    }
  });
  
  const MyDrawerNavigator = createDrawerNavigator({
    Homes: {
        screen: MyHomeScreen,
      },
      Notifications: {
        screen: MyNotificationsScreen,
      },
  });
  
  const MyApp = createAppContainer(MyDrawerNavigator);


module.exports =  MyApp;