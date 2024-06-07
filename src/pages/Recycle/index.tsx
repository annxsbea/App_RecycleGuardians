import React, { useState } from "react";
import { View, ScrollView, TextInput, Text, StyleSheet, Button, TouchableOpacity, Image, Linking, ToastAndroid } from "react-native";
import Logo3 from "../../componentes/imagens/Logo3";
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EvilIcons } from '@expo/vector-icons';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { ResiduosResponse } from "../../@types";
import { residuosService } from "../../services/residuosServices";

import { styles } from "./styles";
export default function Recycle({ route }) {
    const { setUserLogged } = route.params;

    const [tipo_residuo, setTipo_residuo] = useState('');
    const [quantidade_residuo, setQuantidade_residuo] = useState('');
    const [imagem_residuos, setImagem_residuos] = useState('');
    const [validador, setValidador] = useState('');
    const [material, setMaterial] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedImageCam, setSelectedImageCam] = useState('');

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };


    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].base64);
        } else {
            showToast('Nenhuma imagem selecionada.');
        }
    };


    const uploadImageCamara = async () => {

        try {
            await ImagePicker.requestCameraPermissionsAsync();
            let result = await ImagePicker.launchCameraAsync({
                base64: true,
                cameraType: ImagePicker.CameraType.front,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            })
            if (!result.canceled) {
                console.log(result)
                setSelectedImageCam(result.assets[0].base64);
            }

        } catch (error) {
            showToast('Erro ao carregar imagem' + error);


        }
    }

    const deleteImage = async () => {
        try {
            setSelectedImageCam(null);
            setSelectedImage(null);


        } catch (error) {
            showToast('Erro ao apagar imagem' + error);

        }

    }


    const CadastrarReciclagem = async () => {
        if (!tipo_residuo || !quantidade_residuo || !imagem_residuos || !validador) {
            showToast('Por favor, preencha todos os campos.');
            return;
        }
        try {
            const response: ResiduosResponse = await residuosService.register({ tipo_residuo, quantidade_residuo: +quantidade_residuo, imagem_residuos, validador });
            showToast("Reciclagem cadastrada com sucesso!");
            setUserLogged(response);
        } catch (error) {
            showToast("Erro ao cadastrar reciclagem. Tente novamente mais tarde.");
        }
    }

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
                    value={quantidade_residuo}
                    onChangeText={setQuantidade_residuo}
                    style={styles.input}
                />
            </View>


            <View style={styles.fotoContainer}>
                <Text style={styles.titleFoto}>Anexar fotos dos materiais reciclados </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={(uploadImageCamara)} style={styles.button} >
                        <EvilIcons name="camera" size={34} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={(pickImageAsync)} style={styles.button} >
                        <MaterialIcons name="attach-file" size={28} color="white" />
                    </TouchableOpacity>




                </View>



                <View style={styles.imageContainer}>
                    {selectedImage && (
                        <>
                            <Image source={{ uri: selectedImage }} style={styles.image} />
                            <TouchableOpacity onPress={deleteImage} style={styles.buttonTrash}>
                                <EvilIcons name="trash" size={34} color="black" />
                            </TouchableOpacity>
                        </>
                    )}
                    {selectedImageCam && (
                        <>
                            <Image source={{ uri: selectedImageCam }} style={styles.image} />
                            <TouchableOpacity onPress={deleteImage} style={styles.buttonTrash}>
                                <EvilIcons name="trash" size={34} color="black" />
                            </TouchableOpacity>
                        </>
                    )}
                </View>


            </View>
            <View style={styles.qrCodeContainerAbsolute}>
                <Text style={styles.titleQrCode}>Escaneie o QR Code</Text>
                <TouchableOpacity onPress={(uploadImageCamara)} style={styles.buttonQrCode} >
                    <MaterialIcons name="qr-code-scanner" size={84} color="#2A4949" />
                </TouchableOpacity>
                <View>

                </View>

            </View>
            <View style={styles.qrCodeContainerBotao}>
                <TouchableOpacity onPress={CadastrarReciclagem} style={styles.buttonCadastrarReciclagem} >
                    <Text style={styles.textCadastrarReciclagem}>Enviar</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}
