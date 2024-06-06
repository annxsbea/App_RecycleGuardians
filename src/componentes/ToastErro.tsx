import React from 'react';
import { View, StyleSheet, ToastAndroid, Button, StatusBar } from 'react-native';


const ToastError = () => {
    const showToast = () => {
        ToastAndroid.show('A wild Pikachu appeared nearby!', ToastAndroid.SHORT);
    };

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            'All Your Base Are Belong To Us',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            25,
            50
        );
    };

    return (
        <View style={styles.container}>
            <Button title="Toggle Toast" onPress={() => showToast()}/> 
            <Button title="Toggle Toast With Gravity & Offset" onPress={() => showToastWithGravityAndOffset()}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#9108a6',
        padding: 8,
        color: 'white',
    },
});

export default ToastError;