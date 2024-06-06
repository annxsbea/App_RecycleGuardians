import React, { useState } from "react";
import { View, ScrollView, TextInput, Text, StyleSheet } from "react-native";
import Logo3 from "../componentes/imagens/Logo3";
import Checkbox from 'expo-checkbox';

export default function Recycle() {
    const [material, setMaterial] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo3 />
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>Escolha o material</Text>

                <View style={styles.checkboxContainer}>
                    <Text style={styles.label} onPress={() => setMaterial(m => m === 'lata' ? '' : 'lata')}>Lata</Text>
                    <Checkbox
                        value={material === 'lata'}
                        onValueChange={() => setMaterial(m => m === 'lata' ? '' : 'lata')}
                        color={material ? '#4F99B0' : undefined}
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <Text style={styles.label} onPress={() => setMaterial(m => m === 'garrafa' ? '' : 'garrafa')}>Garrafa</Text>
                    <Checkbox
                        value={material === 'garrafa'}
                        onValueChange={() => setMaterial(m => m === 'garrafa' ? '' : 'garrafa')}
                        color={material ? '#4F99B0' : undefined}
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <Text style={styles.label} onPress={() => setMaterial(m => m === 'sacola' ? '' : 'sacola')}>Sacola</Text>
                    <Checkbox
                        value={material === 'sacola'}
                        onValueChange={() => setMaterial(m => m === 'sacola' ? '' : 'sacola')}
                        color={material ? '#4F99B0' : undefined}
                    />
                </View>

                <Text style={styles.quantityLabel}>Escolha a quantidade</Text>

                <TextInput
                    keyboardType="numeric"
                    placeholder="Quantidade"
                    style={styles.input}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 80,
    },
    formContainer: {
        alignItems: 'center',
        padding: 45,
        borderWidth: 1,
        borderColor: '#4F99B0',
        borderRadius: 10,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 10,
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 30,
    },
    checkboxContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    quantityLabel: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#4F99B0',
        borderRadius: 10,
        width: '90%',
        height: 50,
        padding: 10,
        marginBottom: 30,
    },
});
