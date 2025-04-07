import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#60ae62',
  },
  container: {
    flex: 1,
    backgroundColor: '#60ae62',
    padding: 25,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 30,
    alignSelf: 'flex-start',
    width: '100%',
  },
  logo: {
    alignSelf: 'flex-start',
  },
  logoImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  welcomeText: {
    fontSize: 36,
    fontFamily: 'samsung-bold',
    color: '#fff',
    marginBottom: 10,
  },
  caption: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontFamily: 'samsung-bold',
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 15,
    fontSize: 16,
    fontFamily: 'samsung-medium',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 15,
    borderRadius: 15,
  },
  button: {
    width: '45%',
    padding: 12,
    backgroundColor: '#57723a',
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'samsung-bold',
    fontSize: 16,
  },
  registerText: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginTop: 15,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  registerLink: {
    color: '#fff',
    fontFamily: 'samsung-medium',
    textDecorationLine: 'underline',
  },
});