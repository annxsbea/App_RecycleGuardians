import { StyleSheet, Text, View } from "react-native";
import LogoPrincipal from "../componentes/imagens/LogoSecundario";


export default function Page() {
  return (
    <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#ffff' }}>
            <View style={{ alignItems: 'center', marginTop: 100, marginBottom: 100,justifyContent: 'center' }}>
                <LogoPrincipal/>
        
                <View style={{ alignItems: 'center', marginTop: 200,justifyContent: 'center' }}>
                </View>
                <View>
                    {/* Ranking */}
                </View>

           
             </View>
        </View>
    </View>
  );
}


