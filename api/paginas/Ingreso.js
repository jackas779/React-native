import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import fondo from '../assets/ingreso.png'
class Imagine extends React.Component {
    render (){
        return (
            <View>
                <Image source={fondo}></Image>
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('Contrans')}
                style={stilos.boton}>
                    <Text>Contraseña</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const stilos = StyleSheet.create ({
fondo:{
    flex:1
},
boton:{
    alignSelf:'center',
    borderRadius:25,
    backgroundColor: 'purple',
    width:120,
    height:25

}
})
module.exports=Imagine;