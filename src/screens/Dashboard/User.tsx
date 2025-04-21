import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles/User';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/Maintenance.png")} 
        style={styles.image}
      />
      <Text style={styles.maintenanceText}>Sorry, this page is still under maintenance</Text>
    </View>
  );
};

export default UserScreen;