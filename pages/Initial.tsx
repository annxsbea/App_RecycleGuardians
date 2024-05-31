import React from "react";
import {  Button, Text, TouchableOpacity, View } from "react-native";
import LogoInitial from "../componentes/LogoInitial";
import ImageInitial from "../componentes/ImagemInitial";
import { useNavigation } from '@react-navigation/native';


export default function Initial() {
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('SignIn'); 
    }

    return (
        <View style={{flex: 1, backgroundColor:'#001824'}}>
            <View style={{flex: 1, alignItems: 'center', position:'absolute', bottom: 0}}>
                <LogoInitial />
                
                <ImageInitial />
            </View>
        
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{ borderWidth:2, borderColor: '#27596A',backgroundColor: '#35758A',opacity: 0.6,
                                         borderRadius: 30, width: 250, height: 60, alignItems: 'center', justifyContent: 'center',
                                          position: 'absolute', bottom: 100}}  onPress={handleSignIn}>
                <Text style={{color: 'white', fontSize: 20,opacity: 1}}>Vamos começar!</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}