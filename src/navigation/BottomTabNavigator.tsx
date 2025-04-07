import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './types';
import HomeScreen from '../screens/Dashboard/Home';
import ConnectScreen from '../screens/Dashboard/Connect';
import UserScreen from '../screens/Dashboard/User';
import BottomTabBar from '../components/BottomTabBar';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Connect" component={ConnectScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;