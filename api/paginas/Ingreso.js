import React from 'react-native';
import {View,Text,Image,StyleSheet} from 'react-native';
import fondo from '../assets/ingreso.png'
class Imagine extends React.Component {
    render (){
        return (
            <View>
                <Image source={fondo}></Image>

            </View>
        );
    }
}
style = StyleSheet.create ({
fondo:{
    flex:1
}
})
module.export=Imagine;