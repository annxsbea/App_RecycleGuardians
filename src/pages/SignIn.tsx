import React, { useState } from "react";
import { Image, SafeAreaView, Text, ToastAndroid, View, StyleSheet } from "react-native";
import LogoPrincipal from "../componentes/imagens/LogoSecundario";
import ProfileIcon from "../componentes/imagens/profileIcon";

import { Button, Card, TextInput } from "react-native-paper";
import { cpfMask } from "../lib";
import IconSenha from "../componentes/imagens/IconSenha";
import { Link, useNavigation } from "@react-navigation/native";
import { HomeScreenProp, SignUpScreenProp } from "../@types";
import { authService } from "../services/authService";
import { storeData } from "../hooks";


export default function SignInScreen({ route }) {
    const { setUserLogged } = route.params;

    const [email_user, setEmail_user] = useState('');
    const [senha_user, setSenha_user] = useState('');
    const navigation = useNavigation();
    const navigationHome = useNavigation<HomeScreenProp>();
    const navigationSignUp = useNavigation<SignUpScreenProp>();

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const Logar = async () => {
        try {
            const response = await authService.login({ email_user, senha_user });
            setUserLogged(response);
            storeData(response);
            showToast('Login realizado com sucesso!');
            navigationHome.navigate('HomeScreen');
        } catch (error) {
            showToast('Erro ao fazer login. Verifique suas credenciais.');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <LogoPrincipal />
            </View>
            <View style={styles.formContainer}>
                <Card style={styles.card}>
                    <Card.Title title="Login" titleStyle={styles.title} />
                    <Card.Content>
                        <View style={styles.inputContainer}>
                            <ProfileIcon />
                            <TextInput
                                label={<Text style={styles.labelText}>Username</Text>}
                                value={email_user}
                                onChangeText={setEmail_user}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <IconSenha />
                            <TextInput
                                label={<Text style={styles.labelText}>Password</Text>}
                                value={senha_user}
                                onChangeText={text => setSenha_user(text)}
                                secureTextEntry={true}
                                style={styles.input}
                            />
                        </View>
                    </Card.Content>
                    <Button mode="contained" onPress={Logar} style={styles.button}>Login</Button>
                    <View style={styles.linkContainer}>
                        <Text style={styles.text}>Não tem conta?</Text>
                        <Link to="/SignUp">
                            <Text style={styles.linkText}>Cadastre-se</Text>
                        </Link>
                    </View>
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#001824',
        borderTopLeftRadius: 82,
        borderTopRightRadius: 82,
        padding: 20,
    },
    card: {
        padding: 10,
        backgroundColor: '#001824',
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'white',
    },
    inputContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelText: {
        color: '#607DB7',
    },
    input: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        marginTop: 10,
        padding: 5,
        paddingLeft: 35,
        borderTopStartRadius: 18,
        borderTopEndRadius: 18,
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 18,
    },
    button: {
        marginTop: 40,
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#35758A',
        padding: 10,
    },
    linkContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        gap: 5,
    },
    text: {
        color: '#fff',
    },
    linkText: {
        color: '#598E8F',
        fontWeight: 'bold',
    },
});