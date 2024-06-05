import { Image, ScrollView, View, Text } from "react-native"
import Logo3 from "../componentes/imagens/Logo3";
import pontoC1 from "../assets/pontoC1.png";
import pontoC2 from "../assets/pontoC2.png";
import { EvilIcons } from '@expo/vector-icons';




    export default function Coleta(){
        return(
            <ScrollView style={{ height: '100%',flex: 1, backgroundColor: '#ffff' }}>
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <Logo3 />
                </View>
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 28, textAlign: 'center' }}> Pontos de coleta</Text>
                </View>
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 30 }}>

                    <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 30, borderWidth: 1, borderColor: '#4F99B0', borderRadius: 10, width: '80%', height: 280,padding: 10  }}>
                        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 30, flexDirection: 'row'}}>
                        <EvilIcons name="location" size={38} color="#001F25" />
                       <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 13}}>Endereço: PR-323, s/n - Zona Rural, Umuarama - PR</Text>
                       </View>
                        <Image source={pontoC1} style={{ width: '70%', height: 150, marginTop: 30 }} />
                    </View>
                    <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 30, borderWidth: 1, borderColor: '#4F99B0', borderRadius: 10, width: '80%', height: 280,padding: 20 }}>
                        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 30, flexDirection: 'row'}}>
                            <EvilIcons name="location" size={38} color="#001F25 "  />
                         <Text style={{ fontWeight: 'bold',  color: 'black', fontSize: 13}}>Endereço: Praça Roberto Gomes Pedrosa, 1 - Morumbi, São Paulo - SP, 05653-070</Text>
                        </View>
                            <Image source={pontoC2} style={{ width: '70%', height: 150, marginTop: 30 }} />
                    </View>
                </View>
            
            </ScrollView>
        )
    }