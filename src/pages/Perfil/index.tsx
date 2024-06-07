import { Image, ScrollView, View } from "react-native";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Button, Text } from "react-native-paper";
import Logo3 from "../../componentes/imagens/Logo3";
import Person from "../../componentes/imagens/Person";
import { useNavigation } from "@react-navigation/native";
import { SignInScreenProp } from "../../@types";

import { styles } from "./styles";

export default function Perfil({ route }) {
  const { setUserLogged, userLogged } = route.params;
  const navigationSignIn = useNavigation<SignInScreenProp>();

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
