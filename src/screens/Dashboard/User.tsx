import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles/User';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
    </View>
  );
};

export default UserScreen;