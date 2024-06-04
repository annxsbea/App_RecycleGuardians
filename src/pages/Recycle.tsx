import { Text } from "react-native-paper";
import { Image, ScrollView, View } from "react-native"
import Logo3 from "../componentes/Logo3";
export default function Recycle(){
    return(
        <ScrollView style={{}}>
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <Logo3 />
                </View>
                <View style={{
                marginTop: 80,borderWidth: 1, borderColor: 'red', borderRadius: 10, padding: 10,height:250, width: '80%', alignSelf: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tipo de Material</Text>
                
                </View>
                <View>

                </View>
            
        </ScrollView>
    )
}


