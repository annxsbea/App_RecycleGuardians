import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, ToastAndroid } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { Link, useNavigation } from "@react-navigation/native";
import LogoPrincipal from "../componentes/imagens/LogoSecundario";
import ProfileIcon from "../componentes/imagens/profileIcon";
import IconSenha from "../componentes/imagens/IconSenha";
import { authService } from "../services/authService";
import { HomeScreenProp, SignUpResponse } from "../@types";

export default function SignUp({ route }) {
    const { setUserLogged } = route.params;
    const [email_user, setEmail_user] = useState('');
    const [nome_user, setNome_user] = useState('');
    const [senha_user, setSenha_user] = useState('');
    const navigation = useNavigation();
    const navigationHome = useNavigation<HomeScreenProp>();

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const CadastrarUsuario = async () => {
        if (!email_user || !nome_user || !senha_user) {
            showToast('Por favor, preencha todos os campos.');
            return;
        }
        try {
            const response: SignUpResponse = await authService.register({ email_user, senha_user, nome_user });
            showToast("Usuário cadastrado com sucesso!");
            setUserLogged(response);
            navigationHome.navigate('HomeScreen');
        } catch (error) {
            showToast("Erro ao cadastrar usuário. Tente novamente mais tarde.");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoContainer}>
                <LogoPrincipal />
            </View>
            <View style={styles.formContainer}>
                <Card style={styles.card}>
                    <Card.Title title="Criar Conta" titleStyle={styles.title} />
                    <Card.Content>
                        <View style={styles.inputContainer}>
                            <ProfileIcon />
                            <TextInput
                                label={<Text style={styles.labelText}>Email</Text>}
                                value={email_user}
                                onChangeText={setEmail_user}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <ProfileIcon />
                            <TextInput
                                label={<Text style={styles.labelText}>Nome</Text>}
                                value={nome_user}
                                onChangeText={setNome_user}
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
                    <Button mode="contained" onPress={CadastrarUsuario} style={styles.button}>Criar Conta</Button>
                    <View style={styles.linkContainer}>
                        <Text style={styles.text}>Já tem conta?</Text>
                        <Link to="/SignIn">
                            <Text style={styles.linkText}>Logar</Text>
                        </Link>
                    </View>
                </Card>
            </View>
        </ScrollView>
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
        marginBottom: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#001824',
        borderTopLeftRadius: 82,
        borderTopRightRadius: 82,
        padding: 25,
    },
    card: {
        padding: 5,
        backgroundColor: '#001824',
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'white',
    },
    inputContainer: {
        marginBottom: 10,
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
        marginTop: 70,
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
