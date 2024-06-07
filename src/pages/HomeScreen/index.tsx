import React from 'react';
import { View, ScrollView } from 'react-native';
import Logo3 from '../../componentes/imagens/Logo3';
import Carrossel from '../../componentes/Carrossel/index';
import ImagemHome from '../../componentes/imagens/ImagemHome';
import { styles } from "./styles";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo3 />
      </View>
      <View style={styles.carrosselContainer}>
        <Carrossel />
      </View>
      <View style={styles.imagemContainer}>
        <ImagemHome />
      </View>
    </ScrollView>
  );
};

export default Home;
