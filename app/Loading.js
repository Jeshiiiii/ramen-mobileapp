import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default function Loading({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/LogoPNG.png')} // Use local image
        style={styles.logo} 
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items from the top
    alignItems: 'center',
    backgroundColor: '#F4E1D2', // Background color
    paddingTop: 100, // Adjust this value to control how much space is above the logo
  },
  logo: {
    width: 400, // Adjust size as needed
    height: 400,
    marginBottom: 1, // Reduced space below the logo to move buttons upwards
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20, // Space between buttons
  },
  loginButton: {
    backgroundColor: '#C8102E', // Login button background color
    paddingVertical: 15,
    borderRadius: 30, // Curved edges
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FCF5ED', // Login button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#FCF5ED', // Sign up button background color
    paddingVertical: 15,
    borderRadius: 30, // Curved edges
    borderWidth: 1,
    borderColor: '#C8102E',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#C8102E', // Sign up button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});
