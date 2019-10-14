import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import fondo from '../assets/notificacion.png'
class Imagine extends React.Component {
    static navigationOptions={
        drawerLabel:'Recomendaciones',
        drawerIcon:({tintColor})=>(
            <Image
            source={require('../assets/alarma.png')}
            style={[stilos.icon,{tintColor:tintColor}]} 
             />
        ),
    };
    render (){
        return (
            <View>
                <Image source={fondo} style={stilos.fondo}></Image>
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

},
icon:{
    width:24,
    height:24
}
})
module.exports=Imagine;