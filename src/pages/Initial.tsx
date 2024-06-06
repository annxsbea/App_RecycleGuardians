import React from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import LogoInitial from "../componentes/imagens/LogoInitial";
import ImageInitial from "../componentes/imagens/ImagemInitial";
import { useNavigation } from '@react-navigation/native';
import { SignInScreenProp } from "../@types";

export default function Initial() {
    const navigation = useNavigation();
    const navigationSignIn = useNavigation<SignInScreenProp>();

    const handleSignIn = () => {
        navigationSignIn.navigate('SignIn'); 
    }   

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <LogoInitial />
                <ImageInitial />
            </View>
        
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Vamos começar!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#001824',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        position:'absolute',
        bottom: 0
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: '#27596A',
        backgroundColor: '#35758A',
        opacity: 0.6,
        borderRadius: 30,
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        opacity: 1
    }
});
