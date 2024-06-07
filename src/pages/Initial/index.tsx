import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LogoInitial from "../../componentes/imagens/LogoInitial";
import ImageInitial from "../../componentes/imagens/ImagemInitial";
import { useNavigation } from '@react-navigation/native';
import { SignInScreenProp } from "../../@types";
import { styles } from "./styles";

export default function Initial() {
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
