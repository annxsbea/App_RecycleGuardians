import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import LogoPrincipal from '../componentes/Logo3';
import Carrossel from '../componentes/Carrossel/index';
import ImagemHome from '../componentes/imagemHome';
const Home = () => {
  return (
    <ScrollView style={ {flex: 1, backgroundColor: '#ffff'}}>
      <View style={{alignItems: 'center',
        marginTop: 100,
        
        justifyContent: 'center',}}>
        <LogoPrincipal />
      </View>
      <View style={{marginTop: 50 }}>
        <Carrossel/>
      </View>
      <View style={{marginTop: 30,alignSelf: 'center' }}>
        <ImagemHome/>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 200,
    justifyContent: 'center',
  },
};

export default Home;
