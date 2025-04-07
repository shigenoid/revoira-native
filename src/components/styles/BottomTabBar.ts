import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#57723a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  connectButton: {
    backgroundColor: '#57723a',
    borderRadius: 30,
    padding: 15,
    marginHorizontal: 5,
    width: '100%',               // ensure full width
    alignItems: 'center',
    position: 'relative',        // allow child border to be absolutely positioned
    overflow: 'hidden',          // make sure the border doesn't escape the radius
  },
  connectButtonBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#64FF60',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  
  icon: {
    color: '#fff',
    marginBottom: 5,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'samsung-medium',
  },
});
