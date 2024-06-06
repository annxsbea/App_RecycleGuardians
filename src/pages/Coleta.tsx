import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, Text, StyleSheet, ToastAndroid } from "react-native";
import Logo3 from "../componentes/imagens/Logo3";

import { EvilIcons } from '@expo/vector-icons';
import { ColetaResponse } from "../@types";
import { coletaService } from "../services/coleta";


export default function Coleta({ route }) {
    const { userLogged } = route.params;

    const [coleta, setColeta] = useState<ColetaResponse[]>([]);
    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const listColeta = async () => {
        try {
            const response = await coletaService.getColeta()
            setColeta(response)

        } catch (error) {
            showToast('Erro ao obter lista de coletas:');
        }
    };
    
    useEffect(() => {
        listColeta(); 
    }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo3 />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Pontos de Coleta</Text>
      </View>
      <View style={styles.coletasContainer}>
        
        
      {coleta.map(coleta => (
        <View key={coleta.id_coleta} style={styles.coletaCard}>
            <View style={styles.coletaHeader}>
            <EvilIcons name="location" size={38} color="#001F25" />
            <Text style={styles.coletaHeaderText}>Endereço:</Text>
            </View>
            <Text style={styles.enderecoText}>{coleta.endereco_coleta}</Text>
            <Text style={styles.enderecoText}>CEP: {coleta.cep_coleta}</Text>
            <Text style={styles.enderecoText}>Abertura: {coleta.hr_abertura_coleta} - Fechamento: {coleta.hr_fechamento_coleta}</Text>
            <Image source={coleta.image} style={styles.imagemColeta} />
        </View>
        ))}

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
    marginTop: 80,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
    textAlign: 'center',
  },
  coletasContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  coletaCard: {
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#4F99B0',
    borderRadius: 10,
    width: '80%',
    padding: 20,
  },
  coletaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coletaHeaderText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 13,
    marginLeft: 10,
  },
  enderecoText: {
    color: 'black',
    fontSize: 13,
    marginTop: 5,
    textAlign: 'center',
  },
  imagemColeta: {
    width: '70%',
    height: 150,
    marginTop: 20,
  },
});
