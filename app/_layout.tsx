import { Tabs } from 'expo-router';
// import { Home } from 'lucide-react-native';
// import { Recycle } from 'lucide-react-native';
// import { MapPin } from 'lucide-react-native';
// import { UserRound } from 'lucide-react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
export default function TabLayout() {
  return (
  
     <Tabs initialRouteName='index' screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: '#001F25', height: 90, borderTopRightRadius: 30, borderTopLeftRadius: 30 },
      lazy: true,
     
  
      }}>

    <Tabs.Screen name="index" 
         options={{
         headerShown: false, 
         title: 'Home',
         tabBarIcon: (props)=> <AntDesign name="home"  size={32} color={'#fff'}   />
         }}/>
    <Tabs.Screen name="Recycle" options={{
        title: 'Recycle',
        headerShown: false,
          tabBarIcon: (props)=> <MaterialCommunityIcons name="recycle-variant" {...props} size={32} color={'#fff'} />
    }}/>
    <Tabs.Screen name="Coleta"
         options={{
            title: 'Coleta',
            headerShown: false,
            tabBarIcon: (props)=> <MaterialIcons name="share-location" {...props} size={32} color={'#fff'} />

         }}/>

    <Tabs.Screen name="Perfil" options={{
        title: 'Perfil',
        headerShown: false,
          tabBarIcon: (props)=> <Octicons name="person" {...props} size={32} color={'#fff'} />
        }}/>
    </Tabs>
  
  );
}
