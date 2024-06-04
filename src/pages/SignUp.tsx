import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, ScrollView } from "react-native";
import LogoPrincipal from "../componentes/LogoPrincipal";
import ProfileIcon from "../componentes/profileIcon";

import { Button, Card, TextInput } from "react-native-paper";
import { cpfMask } from "../lib";
import IconSenha from "../componentes/IconSenha";
import { Link } from "@react-navigation/native";

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');

    const [senha, setSenha] = useState('');
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: '#fff' }}>
            <View style={{ alignItems: 'center', marginTop: 100, marginBottom: 30,justifyContent: 'center' }}>
            <LogoPrincipal/>
            </View>
       </View>
    
       <View style={{ flex: 1, backgroundColor: '#001824', borderTopLeftRadius: 82, borderTopRightRadius: 82, padding: 20 }}>
        
                <Card style={{  padding: 5,  backgroundColor: '#001824' }}>
                    <Card.Title title="Criar Conta" titleStyle={{ textAlign: 'center', fontSize:25, fontWeight: 'bold', marginTop: 50, color: 'white' }} />
                    <Card.Content style={{ marginTop: 30, }}>
                        <View>
                         <ProfileIcon/>
                        <TextInput
                            label={<Text style={{color: '#607DB7'}}>email</Text>}
                           
                            value={email}
                            onChangeText={ setEmail}
                            style={{ marginBottom: 10, backgroundColor: '#F2F2F2' , borderRadius: 8, marginTop: 10, padding: 5,paddingLeft: 35,borderTopStartRadius: 18, borderTopEndRadius: 18, borderBottomStartRadius: 18, borderBottomEndRadius: 18}}
                        />
                        </View>
                        <View>
                         <ProfileIcon/>
                        <TextInput
                            label={<Text style={{color: '#607DB7'}}>Nome</Text>}
                           
                            value={nome}
                            onChangeText={ setNome}
                            style={{ marginBottom: 10, backgroundColor: '#F2F2F2' , borderRadius: 8, marginTop: 10, padding: 5,paddingLeft: 35,borderTopStartRadius: 18, borderTopEndRadius: 18, borderBottomStartRadius: 18, borderBottomEndRadius: 18}}
                        />
                        </View>
                         <View>
                         <ProfileIcon/>
                        <TextInput
                            label={<Text style={{color: '#607DB7'}}>cpf</Text>}
                           
                            value={cpf}
                            onChangeText={text => setCpf(cpfMask(text))}
                            style={{ marginBottom: 10, backgroundColor: '#F2F2F2' , borderRadius: 8, marginTop: 10, padding: 5,paddingLeft: 35,borderTopStartRadius: 18, borderTopEndRadius: 18, borderBottomStartRadius: 18, borderBottomEndRadius: 18}}
                        />
                        </View>
                        <View >
                        <IconSenha/>
                        <TextInput
                             label={<Text style={{color: '#607DB7'}}>Password</Text>}
                            value={senha}
                            onChangeText={text => setSenha(text)}
                            secureTextEntry={true}
                            style={{ marginBottom: 10, backgroundColor: '#F2F2F2' , borderRadius: 8, marginTop: 10, padding: 5,paddingLeft: 30, borderTopStartRadius: 18, borderTopEndRadius: 18, borderBottomStartRadius: 18, borderBottomEndRadius: 18}}
                        />
                        </View>
                    </Card.Content>
                     <Button mode="contained"  style={{ marginTop: 40, width: 200,height: 60, alignSelf: 'center', backgroundColor: '#35758A',padding: 10 }}>Login</Button>
                     {/* onPress={Logar} */}
                     <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center', gap: 5 }}>
                    <Text style={{  color: '#fff'}}>Já tem conta?</Text>
                    <Link to="/SignIn"><Text style={{  color: '#598E8F', fontWeight: 'bold' }}>Logar</Text></Link>
                    </View>
                    
                    {/* <Button mode="contained" onPress={handleSignUp} style={{ marginTop: 10, width: 150, alignSelf: 'center' }}>Cadastre-se</Button> */} 
                </Card>
        
        
        
        </View>




     </ScrollView>
    );
}