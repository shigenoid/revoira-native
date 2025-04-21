import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60ae62',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  maintenanceText: {
    fontSize: 18,
    fontFamily: 'samsung-bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
  },
});