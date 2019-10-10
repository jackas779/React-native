import React from 'react';
import {Text,View,StyleSheet,Image,TextInput,Dimensions,TouchableOpacity,Alert,YellowBox,ScrollView} from 'react-native';
// import {createStackNavigator } from 'react-navigation-stack'
import Logo from '../assets/Logo.png'
const {width: WIDTH} = Dimensions.get('window')



export class Registro extends React.Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#a94ade',
        },
      };
    alertas=()=>{
    Alert.alert(
        'Alerta',
        'Recuerde usar revisar su correo dentro de las 24 horas siguientes para confirmar si su cuenta fue autorizada',
        [
          {
            text: 'Cancelar',
            onPress: () => YellowBox.ignoreWarnings(['Warning: ...']),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
        ],
        {cancelable: false},
      );}
    render () {
        return ( 
            <ScrollView style={stilos.fondo}>
                <View style={stilos.logocontenido}>
                <Image source={Logo} style={stilos.logo}/>
                <Text style={stilos.text3}>PARKGIS</Text>
                <Text style={stilos.tetx2}> 
                    Tenga en cuenta el administrador revisara su solicitud y dara aprovación dentro de las 24 horas 
                    siguientes al envio de los datos
                     </Text>
                     </View>
                     <View>
                         <TextInput style={stilos.input}
                         placeholder='Email'
                         />
                         <TextInput style={stilos.input}
                         placeholder='Usuario'
                         />
                         <TextInput style={stilos.input}
                         secureTextEntry={true}
                         placeholder='Contraseña'
                         />
                         <TextInput style={stilos.input}
                         secureTextEntry={true}
                         placeholder='Repita Contraseña'
                         />
                     </View>
                     <View>
                         <TouchableOpacity style={stilos.Registro}  onPress={this.alertas}>
                             <Text style={stilos.text}>REGISTRARSE </Text>
                         </TouchableOpacity>
                     </View>
            </ScrollView>
        );
    }
}
const stilos = StyleSheet.create ({
    fondo:{
        flex:1,
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
        fontSize:20,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingLeft: 25,
        marginTop: 30,
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
    },
    text3:{
        fontSize:20,
        marginTop: 2,
        alignSelf:'center',
        color:'white',
        fontWeight:'500'
    },
    logocontenido:{
        alignContent:'center',
        alignSelf:'center'

    },

})
module.exports = Registro;