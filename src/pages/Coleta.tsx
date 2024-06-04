import { Text } from "react-native-paper";
import { Image, ScrollView, View } from "react-native"
import Logo3 from "../componentes/Logo3";



    export default function Coleta(){
        return(
            <ScrollView style={{ height: '100%',flex: 1 }}>
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <Logo3 />
                </View>
            
            </ScrollView>
        )
    }