import React from 'react';
import {Text,View,StyleSheet,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native';
// import {createStackNavigator } from 'react-navigation-stack'
import Logo from '../assets/Logo.png'
const {width: WIDTH} = Dimensions.get('window')

export class Registro extends React.Component {
    render () {
        return ( 
            <View style={stilos.fondo}>
                <Image source={Logo} style={stilos.logo}/>
                <Text style={stilos.tetx2}> 
                    Tenga en cuenta el administrador revisara su solicitud y dara aprovación dentro de las 24 horas 
                    siguientes al envio de los datos
                     </Text>
                     <View>
                         <TextInput style={stilos.input}
                         placeholder='Email'
                         />
                         <TextInput style={stilos.input}
                         placeholder='Usuario'
                         />
                         <TextInput style={stilos.input}
                         placeholder='Contraseña'
                         />
                         <TextInput style={stilos.input}
                         placeholder='Repita Contraseña'
                         />
                     </View>
                     <View>
                         <TouchableOpacity style={stilos.Registro}>
                             <Text style={stilos.text}>REGISTRARSE </Text>
                         </TouchableOpacity>
                     </View>
            </View>
        );
    }
}
const stilos = StyleSheet.create ({
    fondo:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#a94ade'
    },
    logo:{
        width: 120,
        height: 120,
        alignSelf:'center'
    },
    input:{
        width: WIDTH -60,
        fontSize:25,
        borderBottomWidth: 1.5,
        borderBottomColor: 'white',
        paddingLeft: 25,
        marginTop: 10,
        height:35,
        marginHorizontal:20

    },
    Registro: {
        height:35,
        width: WIDTH -60,
        marginTop: 25,
        borderRadius:25,
        backgroundColor:'#590863',
        alignSelf: 'center'

    },
    text: {
        fontSize:20,
        marginTop: 6,
        alignSelf:'center',
        color:'white',


    },
    tetx2:{
        color:'white',
        fontSize:17,
        textAlign:'center',
        marginTop:20,
        width:WIDTH -15
    }

})
module.exports = Registro;