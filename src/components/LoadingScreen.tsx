import React from 'react';
import { View, Animated, Easing } from 'react-native';
import { styles, LoadingScreenStyles } from './styles/LoadingScreen';

interface LoadingScreenProps {
  isLoading: boolean;
  customStyles?: LoadingScreenStyles;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isLoading, 
  customStyles = {} 
}) => {
  const spinValue = new Animated.Value(0);

  // Spin animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  if (!isLoading) return null;

  // Combine default styles with custom styles
  const combinedStyles = {
    container: [styles.container, customStyles.container],
    spinner: [styles.spinner, customStyles.spinner]
  };

  return (
    <View style={combinedStyles.container}>
      <Animated.View 
        style={[
          combinedStyles.spinner, 
          { transform: [{ rotate: spin }] }
        ]} 
      />
    </View>
  );
};

export default LoadingScreen;