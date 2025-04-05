import { StyleSheet, ViewStyle } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#57723a',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  spinner: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderTopColor: '#fff',
    borderRadius: 25,
  }
});

export type LoadingScreenStyles = {
  container?: ViewStyle;
  spinner?: ViewStyle;
};