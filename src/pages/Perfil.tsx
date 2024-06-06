import React, { useState } from "react";
import { Image, ScrollView, View ,StyleSheet} from "react-native";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Button, Text } from "react-native-paper";
import Logo3 from "../componentes/imagens/Logo3";
import Person from "../componentes/imagens/Person";
import { useNavigation } from "@react-navigation/native";
import { UserResponse } from "../@types";
import { SignInScreenProp } from "../@types";



export default function Perfil({ route }) {
  const { setUserLogged , userLogged} = route.params;
    const navigationSignIn = useNavigation<SignInScreenProp>();

  const navigation = useNavigation();



  const handleLogout = () => {
    setUserLogged(false);
    navigationSignIn.navigate('SignIn');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo3 />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.profileHeader}>
          <Person />
          <MaterialIcons name="edit" size={24} color="white" style={styles.editIcon} />
        </View>

        <Text style={styles.userName}>{userLogged.nome_user}</Text>

        <View style={styles.pointsContainer}>
          <Entypo name="star-outlined" size={24} color="white" style={styles.starIcon} />
          <Text style={styles.pointsText}>{userLogged.pontos_user}</Text>
        </View>

        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>Você está em 5º lugar</Text>
        </View>

        <Button mode="contained" style={styles.logoutButton} onPress={handleLogout}>Sair</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#ffffff'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80
  },
  contentContainer: {
    backgroundColor: '#001F25',
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    padding: 30,
    height: '80%',
    marginTop: 150,
    alignItems: 'center'
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: -130
  },
  editIcon: {
    alignSelf: 'flex-end',
    marginTop: -20
  },
  userName: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  pointsContainer: {
    backgroundColor: '#1C2E2E',
    borderRadius: 10,
    width: '42%',
    height: 50,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  starIcon: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 10
  },
  pointsText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 10
  },
  rankContainer: {
    backgroundColor: '#1C2E2E',
    borderRadius: 10,
    width: '55%',
    height: 50,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rankText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
    marginLeft: 10
  },
  logoutButton: {
    backgroundColor: '#35758A',
    marginTop: 100,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center'
  }
});
