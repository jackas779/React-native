import React from 'react';
import {Text,View,StyleSheet,Image,TextInput, TouchableHighlight,TouchableOpacity,Dimensions} from 'react-native';
// import {createStackNavigator } from 'react-navigation-stack';
import Logo from '../assets/Logo.png'
import Loicon from '../assets/iconlogin.png'
import Registro from '../paginas/Registrarse'
import { NavigationEvents } from 'react-navigation';
const {width: WIDTH} = Dimensions.get('window')


export class Login extends React.Component {
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#a94ade'
        }
    }
    render () {
        return ( 
            <View style={stilos.fondo}>
                <View style={stilos.logocontenido}>
                    <Image source={Logo} style={stilos.logo}
                     />
                    <Text style={stilos.textologo}>PARKGIS</Text>
                </View>
                <View>
                    <Image />
                    <TextInput style={stilos.input}
                    placeholder='Usuario'
                    underlineColorAndroid='transparent'
                    >

                    </TextInput >
                    <TextInput style={stilos.input}
                    placeholder='Paswword'
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    >
                    </TextInput>
                </View>
                <View> 
                    <TouchableOpacity style={stilos.Blogin}
                    onPress={()=>this.props.navigation.navigate('Ingres')}>
                        <Text style={stilos.TextLog}>INGRESAR</Text>
                    </TouchableOpacity>
                    <Text style={{alignSelf:'center',marginTop:10,color:'white',fontSize:25}}>-------------------     ó     ----------------- </Text>
                </View>
                <View >
                    <TouchableOpacity style={stilos.Registro} onPress={()=>this.props.navigation.navigate('Register')}>
                        <Text style={stilos.TextLog}> REGISTRO</Text>
                    </TouchableOpacity>
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
        marginTop: 2,
        textAlign:'center',
    },
    input:{
        fontSize: 20,
        borderRadius: 25,
        height:35,
        paddingLeft:45,
        backgroundColor:'#a94ade',
        paddingLeft: 35,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop:15


    },
    boton: {
        borderRadius: 25,
        width: 400,
    },
    iconlogin:{
        position:'absolute',
        backgroundColor:'white',
        top:10,
        left: 37,
    },
    Blogin:{
        borderRadius: 25,
        height:35,
        backgroundColor:'#590863',
        width:WIDTH -60,
        alignContent:'center',
        marginTop:15,
        alignSelf:'center'
    },
    TextLog:{
        fontSize:15,
        color:'white',
        alignSelf:'center',
        marginTop:6

    },
    Registro: {
        width: WIDTH -75,
        borderRadius: 25,
        height:35,
        backgroundColor:'#590863',
        alignContent:'center',
        marginTop:25,
        alignSelf:'center'
    }
});
module.exports = Login;