import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Logo3 from '../componentes/imagens/Logo3';
import Carrossel from '../componentes/Carrossel/index';
import ImagemHome from '../componentes/imagens/ImagemHome';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
  carrosselContainer: {
    marginTop: 50,
  },
  imagemContainer: {
    marginTop: 30,
    alignSelf: 'center',
  },
});

export default Home;
