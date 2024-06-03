import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogoPrincipal from "../componentes/LogoPrincipal";
import  Carrossel  from "../componentes/Carrossel/index";


import React from 'react';

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#ffff' }}>
            <View style={{ alignItems: 'center', marginTop: 100, marginBottom: 100,justifyContent: 'center' }}>
                <LogoPrincipal/>
        
                <View style={{ alignItems: 'center', marginTop: 200,justifyContent: 'center' }}>
                <Carrossel/>
                </View>
                <View>
                    {/* Ranking */}
                </View>

           
             </View>
        </View>
    </View>
    );
}