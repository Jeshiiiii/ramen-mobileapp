import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top background color section */}
      <View style={styles.topSection}>
        {/* Logo at the top */}
        <Image 
          source={require('./assets/LogoPNG.png')} // Replace with your actual logo file path
          style={styles.logo}
        />
      </View>

      {/* Login form card container */}
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Login to Your Account</Text>

        {/* Username Field */}
        <Text style={styles.label}>Username <Text style={styles.asterisk}>*</Text></Text>
        <TextInput style={styles.input} />

        {/* Password Field */}
        <Text style={styles.label}>Password <Text style={styles.asterisk}>*</Text></Text>
        <TextInput style={styles.input} secureTextEntry />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <Text style={styles.forgotPassword} onPress={() => {/* Add navigation or action here */}}>
          Forgot Password?
        </Text>

        {/* Signup Link */}
        <Text style={styles.linkText}>
          Don't have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
            Sign Up here
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E1D2', // Background color for the top section
  },
  topSection: {
    backgroundColor: '#F4E1D2',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%', // Adjust the height of the top section
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20, // Space between the logo and the form
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FCF5ED', // Background color for the form card
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    justifyContent: 'flex-start', // Change to 'flex-start' to move content upwards
    width: '100%', // Stretch the card to the sides
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15, // Reduced margin for better spacing
    textAlign: 'center',
    color: '#000',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000', // Label text color
  },
  asterisk: {
    color: '#C8102E', // Color of the asterisk (*)
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10, // Reduced margin for better spacing
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#C8102E', // Button background color
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15, // Reduced margin for better spacing
  },
  loginButtonText: {
    color: '#FCF5ED', // Button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#000', // Color for "Forgot Password?" text
    textAlign: 'center',
    marginVertical: 10, // Vertical margin for spacing
    fontSize: 16,
    fontWeight: 'bold', // Added bold weight
  },
  linkText: {
    color: '#000', // Text color for "Don't have an account?"
    textAlign: 'center',
    marginTop: 15, // Reduced margin for better spacing
    fontSize: 16,
  },
  link: {
    color: '#C8102E', // Color for "Sign Up here" link
    fontWeight: 'bold',
  },
});
