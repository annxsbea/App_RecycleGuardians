import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#ffffff'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80
  },
  contentContainer: {
    backgroundColor: '#001F25',
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    padding: 30,
    height: '80%',
    marginTop: 150,
    alignItems: 'center'
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: -130
  },
  editIcon: {
    alignSelf: 'flex-end',
    marginTop: -20
  },
  userName: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  pointsContainer: {
    backgroundColor: '#1C2E2E',
    borderRadius: 10,
    width: '42%',
    height: 50,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  starIcon: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 10
  },
  pointsText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 10
  },
  rankContainer: {
    backgroundColor: '#1C2E2E',
    borderRadius: 10,
    width: '55%',
    height: 50,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rankText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
    marginLeft: 10
  },
  logoutButton: {
    backgroundColor: '#35758A',
    marginTop: 100,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center'
  }
});
