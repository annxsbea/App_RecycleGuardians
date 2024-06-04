import React from 'react';
import { View, Text } from 'react-native';
import LogoPrincipal from '../componentes/LogoPrincipal';
import Carrossel from '../componentes/Carrossel/index';

const Home = () => {
  return (
    <View style={ {flex: 1, backgroundColor: '#ffff'}}>
      <View style={{alignItems: 'center',
        marginTop: 100,
        
        justifyContent: 'center',}}>
        <LogoPrincipal />
      </View>
      <View style={{marginTop: 50 }}>
        <Carrossel/>
      </View>
    </View>
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
