import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './types';
import HomeScreen from '../screens/Dashboard/Home';
import ConnectScreen from '../screens/Dashboard/Connect';
import UserScreen from '../screens/Dashboard/User';
import BottomTabBar from '../components/BottomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const withSafeArea = (Component: React.ComponentType) => () =>
  (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <Component />
    </SafeAreaView>
  );

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={withSafeArea(HomeScreen)} />
      <Tab.Screen name="Connect" component={withSafeArea(ConnectScreen)} />
      <Tab.Screen name="User" component={withSafeArea(UserScreen)} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#60ae62', // same as screen background
  },
});

export default BottomTabNavigator;
