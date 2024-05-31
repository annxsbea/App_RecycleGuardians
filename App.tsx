import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import Initial from './pages/Initial'
import React from 'react';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MainStack() {

  return (
    <Stack.Navigator>

    <Stack.Screen name="Initial" component={Initial}    options={{ headerShown: false }}/>
    <Stack.Screen name="SignIn" component={SignIn}   options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SignUp" component={SignUp} />
    {/* <Stack.Screen name="Home" component={Home} /> */}

    </Stack.Navigator>

  )}
export default function App () {
  // const [userLogged, setUserLogged] = React.useState<AtendenteResponse | null>(null);

  // const getUserfromStorage = async () => {
  //   const get = await getData( );
  //   setUserLogged(get);
  // }
 

  // React.useEffect(() => {
  //   getUserfromStorage();
  // }, []);



  return (
    <NavigationContainer>

    <StatusBar style="light" />
    <MainStack/>
    </NavigationContainer>

  );
}


