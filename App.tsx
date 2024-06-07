import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { getData } from './src/hooks';
import { UserResponse } from './src/@types';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import Initial from './src/pages/Initial';
import SignIn from './src/pages/SignIn';
import Home from './src/pages/HomeScreen';
import SignUp from './src/pages/SignUp';
import Perfil from './src/pages/Perfil';
import Coleta from './src/pages/Coleta';
import Recycle from './src/pages/Recycle';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userLogged, setUserLogged] = useState<UserResponse | null>(null);

  const getUserfromStorage = async () => {
    const get = await getData();
    setUserLogged(get);
  }

  useEffect(() => {
    getUserfromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userLogged ? (
          <Tab.Navigator initialRouteName='Home'
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: { backgroundColor: '#001F25', height: 90 },
              lazy: true,
            }}>
            <Tab.Screen name="Home" component={Home} options={{
              headerShown: false,
              title: 'Home',
              tabBarIcon: () => <AntDesign name="home" size={32} color={'#fff'} />
            }}
              initialParams={{ setUserLogged, userLogged }} />
            <Tab.Screen name="Recycle" component={Recycle} options={{
              title: 'Recycle',
              headerShown: false,
              tabBarIcon: (props) => <MaterialCommunityIcons name="recycle-variant" {...props} size={32} color={'#fff'} />
            }} initialParams={{ setUserLogged, userLogged }} />
            <Tab.Screen name="Coleta" component={Coleta} options={{
              title: 'Coleta',
              headerShown: false,
              tabBarIcon: (props) => <MaterialIcons name="share-location" {...props} size={32} color={'#fff'} />
            }} initialParams={{ setUserLogged, userLogged }} />
            <Tab.Screen
              name="Perfil"
              component={Perfil} options={{
                title: 'Perfil',
                headerShown: false,
                tabBarIcon: (props) => <Octicons name="person" {...props} size={32} color={'#fff'} />
              }}
              initialParams={{ setUserLogged, userLogged }} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }} initialParams={{
              setUserLogged,
            }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} initialParams={{
              setUserLogged,
            }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} initialParams={{ setUserLogged }} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
