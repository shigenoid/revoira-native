import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles/Register';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useCustomFonts from '../../hooks/useFonts';

type RootStackParamList = {
  Login: undefined;
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const fontsLoaded = useCustomFonts();

  const handleRegister = async () => {
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
  
    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    if (!trimmedUsername || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
      alert('Please fill in all the fields');
      return;
    }
  
    if (!isValidEmail(trimmedEmail)) {
      alert('Please enter a valid email address');
      return;
    }
  
    if (trimmedPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
  
    if (trimmedPassword.length > 26) {
      alert('Password cannot exceed 26 characters');
      return;
    }
  
    if (trimmedPassword !== trimmedConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    setIsLoading(true);
    try {
      const response = await fetch('https://revoira.vercel.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: trimmedEmail,
          UserName: trimmedUsername,
          Password: trimmedPassword
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Show error message from backend if available
        if (data && data.message) {
          alert(data.message); // e.g., "Email already exists"
        } else {
          alert('Registration failed. Please try again.');
        }
        return; // Stop here to prevent further actions
      }
  
      alert('Account created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  
  

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#60ae62' }}>
        <ActivityIndicator size="large" color="#57723a" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Create an account</Text>
          <Text style={styles.caption}>Take part in creating a better world!</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full/Nickname*</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="John Doe"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email*</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="jake.buckley24@rec.om"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                secureTextEntry={!showPassword}
                maxLength={26}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <FontAwesome 
                  name={showPassword ? 'eye-slash' : 'eye'} 
                  size={20} 
                  color="#fff" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                secureTextEntry={!showConfirmPassword}
                maxLength={26}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesome 
                  name={showConfirmPassword ? 'eye-slash' : 'eye'} 
                  size={20} 
                  color="#fff" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Register</Text>
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.loginText}>
          <Text onPress={handleLogin} style={styles.loginLink}>
            Already have an account?
          </Text>
        </Text>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Register;