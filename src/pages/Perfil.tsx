import { Image, ScrollView, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Text } from "react-native-paper";
import Logo3 from "../componentes/Logo3";
import Person from "../componentes/Person";


export default function Perfil(){
    
    return(
    <ScrollView style={{height: '100%',flex: 1, backgroundColor: '#ffffff'}}>
       
            <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <Logo3 />
            </View>


       <View style={{ backgroundColor: '#001F25', borderTopLeftRadius: 42, borderTopRightRadius: 42, padding: 30, height: '80%', marginTop: 150}}>
           <View style={{ alignContent: 'center', alignItems: 'center', marginTop: -130 }}>
           <Person/>
           </View>
           <MaterialIcons name="edit" size={24} color="white" style={{ alignSelf: 'flex-end', marginTop: -20 }}   />

           <View style={{ alignItems: 'center', marginTop: 20 }}>
               <Text style={{ fontWeight: 'bold', marginTop: 10, color: 'white', fontSize: 30, textAlign: 'center' }}>Anna</Text>
               <View style={{backgroundColor: '#1C2E2E', borderRadius: 10, width: '39%', height: 50, padding: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
               <Entypo name="star-outlined" size={24} color="white" style={{}} />
              
               <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, marginLeft: 10 }}>5000pt</Text>
               
               </View>
               <View style={{backgroundColor: '#1C2E2E', borderRadius: 10, width: '50%', height: 50, padding: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 13, marginLeft: 10 }}>Voce	está em 5º lugar</Text>
               </View>


           </View>
       
           <Button mode="contained"  style={{ backgroundColor: '#35758A', marginTop: 100, borderRadius: 20, width: '50%', alignSelf: 'center' }}> Sair</Button>
          
       </View>
   </ScrollView>
    )
}


