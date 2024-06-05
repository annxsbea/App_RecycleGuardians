import { Text } from "react-native-paper";
import { Image, ScrollView, TextInput, View } from "react-native"
import Logo3 from "../componentes/imagens/Logo3";
import { useState } from "react";
import Checkbox from 'expo-checkbox';
export default function Recycle(){
    const [material, setMaterial] = useState('');


    return(
        <ScrollView style={{ backgroundColor: '#ffff'}}>
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <Logo3 />
                <View/>


                <View style={{ alignItems: 'center', marginTop: 10,padding: 45,borderWidth: 1, borderColor: '#4F99B0', borderRadius: 10, width: '90%' }}>
                    <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 22, textAlign: 'center',marginBottom: 30 }}>Escolha o material</Text>
                 <View style={{flex: 1, flexDirection: 'row',width:'110%', justifyContent: 'space-between' , alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 20}} onPress={() => setMaterial(m => m === 'lata' ? '' : 'lata')}>Lata</Text>
                    <Checkbox
                    style={{}}
                    value={material === 'lata'}
                    onValueChange={() => setMaterial(m => m === 'lata' ? '' : 'lata')}
                    color={material ? '#4F99B0' : undefined}
                    />  
                 </View>

                <View style={{flex: 1, flexDirection: 'row',width:'110%', justifyContent: 'space-between' , alignItems: 'center',marginTop: 20,marginBottom: 20 }}>
                    <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 20,  }} onPress={() => setMaterial(m => m === 'garrafa' ? '' : 'garrafa')}>Garrafa</Text>
                    <Checkbox
                    style={{}}
                    value={material === 'garrafa'}
                    onValueChange={() => setMaterial(m => m === 'garrafa' ? '' : 'garrafa')}
                    color={material ? '#4F99B0' : undefined}
                />  
                </View>

                <View style={{flex: 1, flexDirection: 'row',width:'110%', justifyContent: 'space-between' , alignItems: 'center', }}>
                    <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 20 }}  onPress={() => setMaterial(m => m === 'sacola' ? '' : 'sacola')}
                            > Sacola</Text>
                    <Checkbox
                    style={{}}
                    value={material === 'sacola'}
                    onValueChange={() => setMaterial(m => m === 'sacola' ? '' : 'sacola')}
                    color={material ? '#4F99B0' : undefined}
                />  
                </View>


                <View style={{  marginTop: 50 }}></View>
                    <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 20,marginBottom: 30 }}>Escolha a quantidade</Text>
               
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Quantidade"
                        style={{borderWidth: 1, borderColor: '#4F99B0', borderRadius: 10, width: '90%', height: 50, padding: 10, marginBottom: 30 }}

                    />
               
               
                </View>
                
      
                




                </View>
                
            
        </ScrollView>
    )
}


