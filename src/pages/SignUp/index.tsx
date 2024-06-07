import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, ToastAndroid } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { Link, useNavigation } from "@react-navigation/native";
import LogoPrincipal from "../../componentes/imagens/LogoSecundario";
import ProfileIcon from "../../componentes/imagens/profileIcon";
import IconSenha from "../../componentes/imagens/IconSenha";
import { authService } from "../../services/authService";
import { HomeScreenProp, SignUpResponse } from "../../@types";
import { styles } from "./styles";
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
