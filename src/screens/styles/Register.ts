import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60ae62',
    padding: 30,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'samsung-bold',
    color: '#fff',
    marginVertical: 10,
  },
  caption: {
    fontSize: 16,
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
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    paddingRight: 40,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,
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
  loginText: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    marginTop: 15,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  loginLink: {
    color: '#fff',
    fontFamily: 'samsung-medium',
    textDecorationLine: 'underline',
  },
});