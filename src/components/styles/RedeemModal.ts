import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#3F4E2F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 40,
    minHeight: 400,
  },
  redeemIcon: {
    alignSelf: 'flex-start',
    
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'samsung-bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  exampleText: {
    color: 'rgba(255,255,255,0.2)',
    fontFamily: 'samsung-light',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: 15,
    color: 'white',
    fontFamily: 'samsung-medium',
    marginVertical: 20,
  },
  helpText: {
    color: 'white',
    fontFamily: 'samsung-medium',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 40,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 20,
  },
  verifyButton: {
    backgroundColor: '#4AB847',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyText: {
    color: 'white',
    fontFamily: 'samsung-bold',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonIcon: {
    marginRight: 5,
  },
  dragHandle: {
    width: 80,
    height: 8,
    backgroundColor: '#617948',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  overlayTouchArea: {
    flex: 1,
    width: '100%'
  },
});