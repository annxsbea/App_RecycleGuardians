import React, { useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import LogoPrincipal from "../componentes/LogoPrincipal";
import ProfileIcon from "../componentes/profileIcon";

import { Button, Card, TextInput } from "react-native-paper";
import { cpfMask } from "../Lib";
import IconSenha from "../componentes/IconSenha";
import { Link, useNavigation } from "@react-navigation/native";

export default function SignInScreen({ setUserLogged}) {
    const navigationHome = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


        const goToHome=()=>{ 
            navigationHome.navigate('Home');
        }
    // const Logar = async () => {
    //     try {
    //         const response: SignInResponse = await authService.login({ cpf, senha });
    //         setUserLogged(response);
    //         storeData(response);
    //         showToast('Login realizado com sucesso!');
    //         navigation.navigate('Home');
    //     } catch (error) {
    //         showToast('Erro ao fazer login. Verifique suas credenciais.');
    //     }
    // }

    return (
    
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: '#fff' }}>
            <View style={{ alignItems: 'center', marginTop: 100, marginBottom: 100,justifyContent: 'center' }}>
            <LogoPrincipal/>
            </View>
       </View>
    
       <View style={{ flex: 1, backgroundColor: '#001824', borderTopLeftRadius: 82, borderTopRightRadius: 82, padding: 20 }}>
        
                <Card style={{  padding: 10,  backgroundColor: '#001824' }}>
                    <Card.Title title="Login" titleStyle={{ textAlign: 'center', fontSize:26, fontWeight: 'bold', marginTop: 50, color: 'white' }} />
                    <Card.Content style={{ marginTop: 50, }}>
                        <View>
                         <ProfileIcon/>
                        <TextInput
                            label={<Text style={{color: '#607DB7'}}>Username</Text>}
                           
                            value={email}
                            onChangeText={ setEmail}
                            style={{ marginBottom: 20, backgroundColor: '#F2F2F2' , borderRadius: 8, marginTop: 10, padding: 5,paddingLeft: 35,borderTopStartRadius: 18, borderTopEndRadius: 18, borderBottomStartRadius: 18, borderBottomEndRadius: 18}}
                        />
                        </View>
                        <View >
                        <IconSenha/>
                        <TextInput
                             label={<Text style={{color: '#607DB7'}}>Password</Text>}
                            value={senha}
                            onChangeText={text => setSenha(text)}
                            secureTextEntry={true}
                            style={{ marginBottom: 20, backgroundColor: '#F2F2F2' , borderRadius: 8, marginTop: 10, padding: 5,paddingLeft: 30, borderTopStartRadius: 18, borderTopEndRadius: 18, borderBottomStartRadius: 18, borderBottomEndRadius: 18}}
                        />
                        </View>
                    </Card.Content>
                     <Button mode="contained" onPress={goToHome} style={{ marginTop: 40, width: 200,height: 60, alignSelf: 'center', backgroundColor: '#35758A',padding: 10 }}>Login</Button>
                     <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center', gap: 5 }}>
                    <Text style={{  color: '#fff'}}>Não tem conta?</Text>
                    <Link to="/SignUp"><Text style={{  color: '#598E8F', fontWeight: 'bold' }}>Cadastre-se</Text></Link>
                    </View>
                    
                    {/* <Button mode="contained" onPress={handleSignUp} style={{ marginTop: 10, width: 150, alignSelf: 'center' }}>Cadastre-se</Button> */} 
                </Card>
        
        
        
        </View>




     </View>
    
    )
}