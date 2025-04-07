import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles/Home';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      {/* Your home screen content */}
    </View>
  );
};

export default HomeScreen;