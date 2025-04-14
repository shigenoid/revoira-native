import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60ae62',
    padding: 25,
  },
  profileSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    maxHeight: 100,
  },
  greetingContainer: {
    marginLeft: 15,
  },
  profileImageContainer: {
    borderWidth: 3,
    borderColor: '#57723A',
    borderRadius: 50,
    padding: 3,
  },
  profileImagePlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  greetingText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'samsung-bold',
    lineHeight: 30, // Ensures proper spacing between lines
  },
  // Updated Stats Section
  statsContainer: {
    flex: 1, // Reduced from flex: 2
    backgroundColor: '#57723A',
    borderRadius: 20,
    marginVertical: 15, 
    maxHeight: 105, 
  },
  statsSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    width: 1,
    height: '50%',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  statNumber: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'samsung-bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'samsung-medium',
    marginTop: 5,
  },
  // Updated Buttons Section
  buttonsSection: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#57723A',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    width: '30%',
    padding: 15, 
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'samsung-medium',
    marginTop: 5,
  },
});

export default styles;