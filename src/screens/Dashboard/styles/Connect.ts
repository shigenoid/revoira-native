import { StyleSheet, Dimensions } from 'react-native';

const size = 250;
const borderLength = 30;
const borderWidth = 4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameContainer: {
    width: size,
    height: size,
    position: 'relative',
  },
  corner: {
    width: borderLength,
    height: borderLength,
    borderColor: 'white',
    position: 'absolute',
    borderRadius: 4,
  },
  tl: {
    top: 0,
    left: 0,
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth,
  },
  tr: {
    top: 0,
    right: 0,
    borderTopWidth: borderWidth,
    borderRightWidth: borderWidth,
  },
  bl: {
    bottom: 0,
    left: 0,
    borderBottomWidth: borderWidth,
    borderLeftWidth: borderWidth,
  },
  br: {
    bottom: 0,
    right: 0,
    borderBottomWidth: borderWidth,
    borderRightWidth: borderWidth,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 200,
    width: Dimensions.get('window').width,
  },
  rescanText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
});