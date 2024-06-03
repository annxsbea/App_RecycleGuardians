import React from 'react';
import { View, Text } from 'react-native';
import LogoPrincipal from '../componentes/LogoPrincipal';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoPrincipal />
      </View>
      <View style={styles.content}>
        {/* Ranking */}
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
