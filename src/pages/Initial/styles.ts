import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#001824',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        position:'absolute',
        bottom: 0
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: '#27596A',
        backgroundColor: '#35758A',
        opacity: 0.6,
        borderRadius: 30,
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        opacity: 1
    }
});
