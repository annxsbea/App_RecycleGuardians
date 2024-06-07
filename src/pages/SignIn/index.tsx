import React, { useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { Link, useNavigation } from "@react-navigation/native";

import LogoPrincipal from "../../componentes/imagens/LogoSecundario";
import ProfileIcon from "../../componentes/imagens/profileIcon";
import IconSenha from "../../componentes/imagens/IconSenha";

import { authService } from "../../services/authService";
import { storeData } from "../../hooks";

import { styles } from "./styles";

import { HomeScreenProp } from "../../@types";

export default function SignInScreen({ route }) {
    const { setUserLogged } = route.params;

    const [email_user, setEmail_user] = useState('');
    const [senha_user, setSenha_user] = useState('');

    const navigationHome = useNavigation<HomeScreenProp>();

    const showToast = (message: string) => {
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
