import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
    textAlign: 'center',
  },
  coletasContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  coletaCard: {
    marginTop: 30,
    backgroundColor: '#cbe0e792',
    borderRadius: 10,
    width: '80%',
    padding: 20,
  },
  coletaHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  coletaHeaderText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
  },
  enderecoText: {
    color: 'black',
    fontSize: 15,
    marginTop: 20,
  },
  enderecoText2: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
  },
  enderecoText3: {
    color: 'black',
    fontSize: 15,
  },
  imagemColeta: {
    width: '70%',
    height: 150,
    marginTop: 30,
    alignSelf: 'center',
  },
});
