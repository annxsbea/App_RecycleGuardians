import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, Text, StyleSheet, ToastAndroid } from "react-native";
import Logo3 from "../../componentes/imagens/Logo3";

import { EvilIcons } from '@expo/vector-icons';
import { ColetaResponse } from "../../@types";
import { coletaService } from "../../services/coleta";

import {styles} from "./styles";

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
      
      <View style={styles.coletasContainer}>
        
        
      {coleta.map(coleta => (
        <View key={coleta.id_coleta} style={styles.coletaCard}>
            <View style={styles.coletaHeader}>
            <EvilIcons name="location" size={38} color="#07363f" />
            <Text style={styles.coletaHeaderText}>Ponto de coleta </Text>
            </View>
            <Text style={styles.enderecoText}>{coleta.endereco_coleta}</Text>
            <Text style={styles.enderecoText2}>CEP: {coleta.cep_coleta}</Text>
            <Text style={styles.enderecoText3}>Abertura: {coleta.hr_abertura_coleta} - Fechamento: {coleta.hr_fechamento_coleta}</Text>
            <Image source={coleta.image} style={styles.imagemColeta} />
        </View>
        ))}

      </View>
    </ScrollView>
  );
}
