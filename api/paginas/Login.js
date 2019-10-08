import React from 'react';
import {Text,View,StyleSheet,Image,TextInput} from 'react-native';
// import {createStackNavigator } from 'react-navigation-stack';
import Logo from '../assets/Logo.png'

export class Login extends React.Component {
    render () {
        return ( 
            <View style={stilos.fondo}>
                <View style={stilos.logocontenido}>
                    <Image source={Logo} style={stilos.logo}
                     />
                    <Text style={stilos.textologo}>PARKING</Text>
                </View>
                <View>
                    <TextInput style={stilos.input}
                    placeholder='Usuario'
                    underlineColorAndroid='transparent'
                    >

                    </TextInput>
                </View>
            </View>
        );
    }
}
const stilos = StyleSheet.create ({
    fondo:{
        flex:1,
        backgroundColor:'#a94ade',
        justifyContent:'center',
        alignContent:'center'
    },
    logocontenido:{
        alignContent:'center',
        alignSelf:'center'

    },
    logo:{
        width:120,
        height:120,
    },
    textologo:{
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
        marginTop: 5,
        textAlign:'center',
    },
    input:{
        fontSize: 25,
        borderRadius: 25,
        height:35,
        paddingLeft:45,
        backgroundColor:'#a94ade',


    }


});
module.exports = Login;