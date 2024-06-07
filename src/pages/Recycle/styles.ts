import { StyleSheet } from "react-native";

export
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
            backgroundColor: '#d9e6e9',
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
        titleFoto: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            textAlign: 'left',
            marginBottom: 30,
        },
        fotoContainer: {
            padding: 25,
            width: '90%',
            marginHorizontal: '5%',
            backgroundColor: '#86acb9',
            borderRadius: 10,
            marginTop: 10,
        },
        button: {
            width: 100,
            height: 60,
            backgroundColor: '#41626d',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,

        },
        buttonText: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
        },
        buttonContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 30,

            flexDirection: 'row',
        },
        buttonTrash: {

            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,

        },
        imageContainer: {
            marginTop: 20,
            alignItems: 'center',
        },
        image: {
            width: 200,
            height: 200,
        },


        qrCodeContainerAbsolute: {
            marginTop: 10,
            width: '100%',
            padding: 20,
            alignItems: 'center',


        },
        titleQrCode: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 30,

        },
        buttonQrCode: {
            alignItems: 'center',
        },
        qrCodeContainerBotao: {
            alignItems: 'center',
            justifyContent: 'center',

        },
        buttonCadastrarReciclagem: {
            width: 200,
            height: 60,
            backgroundColor: '#35758A',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            marginTop: 50,
        },
        textCadastrarReciclagem: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
        },
    });
