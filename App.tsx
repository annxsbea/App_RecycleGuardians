// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AnimatedTabBar, {
//   TabsConfig,
//   BubbleTabBarItemConfig,
// } from '@gorhom/animated-tabbar';

// import Initial from './pages/Initial'
// import React from 'react';
// import SignIn from './pages/SignIn';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import Perfil from './pages/Perfil'
// import Coleta from './pages/Coleta';

// import Recycle from './pages/Recycle'

// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator<MainTabsParams>();
// function MainStack() {

//   return (
//     <Stack.Navigator>

//     <Stack.Screen name="Initial" component={Initial}    options={{ headerShown: false }}/>
//     <Stack.Screen name="SignIn" component={SignIn}   options={{ headerShown: false }} />
//     <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }}/>
//     <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }} />
//     {/* <Stack.Screen name="Home" component={Home} /> */}

//     </Stack.Navigator>

//   )}
  
// const TabNavigator: React.FC = () => {
//   const tabs = [
//     {
//       name: 'Home',
//       label: 'Home',
//       component: Home,
//     },
   
//     {
//       name: 'Perfil',
//       label: 'Perfil',
//       component: Perfil,
//     },
//     {
//       name: 'Recycle',
//       label: 'Recycle',
//       component: Recycle,
//     },
//     {
//       name: 'Coleta',
//       label: 'Coleta',
//       component: Coleta,
//     },
//   ];
//   return (
//     <Tab.Navigator
//       tabBar={(props) => <TabBar {...props} />}
//       initialRouteName={'Home'}
//     >
//       {tabs.map((_, index) => {
//         return (
//           <Tab.Screen
//             key={index}
//             name={_.name}
//             component={_.component}
//             options={{
//               tabBarLabel: _.label,
//             }}
//           />
//         );
//       })}
//     </Tab.Navigator>
//   );
// };
// export default function App () {
//   // const [userLogged, setUserLogged] = React.useState<AtendenteResponse | null>(null);

//   // const getUserfromStorage = async () => {
//   //   const get = await getData( );
//   //   setUserLogged(get);
//   // }
 

//   // React.useEffect(() => {
//   //   getUserfromStorage();
//   // }, []);



//   return (
//     <NavigationContainer>

//     <StatusBar style="light" />
//     <MainStack/>
//     </NavigationContainer>

//   );
// }


