import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, AuthStackParamList } from './types';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import BottomTabNavigator from './BottomTabNavigator';

// Create stack navigators
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

// Auth Stack Component
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

// Main App Navigator
const AppNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
      <RootStack.Screen name="Main" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;