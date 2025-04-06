import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles/Login';
import useCustomFonts from '../hooks/useFonts';

type RootStackParamList = {
  Dashboard: undefined;
  Register: undefined;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const fontsLoaded = useCustomFonts();
  
  const handleLogin = async () => {
    // Trim inputs
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
  
    // Check for empty fields
    if (!trimmedEmail || !trimmedPassword) {
      alert('Email and password can\'t be blank.');
      setIsLoading(false);
      return;
    }
  
    setIsLoading(true);
    try {
      const response = await fetch('https://revoira.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      if (data.success) {
        navigation.navigate('Dashboard');
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      // Proper type narrowing for the error
      if (error instanceof Error) {
        alert(error.message || 'Login failed. Please try again.');
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#57723a" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image 
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.welcomeText}>
          Welcome Back!
        </Text>
        <Text style={styles.caption}>Enter your login credentials...</Text>
      </View>

      {/* Input Section */}
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry
            maxLength={30}
          />
        </View>

        {/* Sign In Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
          activeOpacity={0.7}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Registration Link */}
      <Text style={styles.registerText}>
        <Text onPress={handleRegister} style={styles.registerLink}>
          Don't have an account yet?
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Login;