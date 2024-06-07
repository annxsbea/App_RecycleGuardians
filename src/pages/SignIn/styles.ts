import { StyleSheet } from "react-native";

export 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#001824',
        borderTopLeftRadius: 82,
        borderTopRightRadius: 82,
        padding: 20,
    },
    card: {
        padding: 10,
        backgroundColor: '#001824',
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'white',
    },
    inputContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelText: {
        color: '#607DB7',
    },
    input: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        marginTop: 10,
        padding: 5,
        paddingLeft: 35,
        borderTopStartRadius: 18,
        borderTopEndRadius: 18,
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 18,
    },
    button: {
        marginTop: 40,
        width: 200,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#35758A',
        padding: 10,
    },
    linkContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        gap: 5,
    },
    text: {
        color: '#fff',
    },
    linkText: {
        color: '#598E8F',
        fontWeight: 'bold',
    },
});