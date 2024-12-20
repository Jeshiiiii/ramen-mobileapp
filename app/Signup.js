import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Signup({ navigation }) {
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

      {/* Signup form card container */}
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Create a New Account</Text>

        {/* Username Field */}
        <Text style={styles.label}>Username <Text style={styles.asterisk}>*</Text></Text>
        <TextInput style={styles.input} />

        {/* Email Field */}
        <Text style={styles.label}>Email Address <Text style={styles.asterisk}>*</Text></Text>
        <TextInput style={styles.input} keyboardType="email-address" />

        {/* Password Field */}
        <Text style={styles.label}>Password <Text style={styles.asterisk}>*</Text></Text>
        <TextInput style={styles.input} secureTextEntry />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => {}}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.linkText}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Login here
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
    marginBottom: 30, // Space between the logo and the form
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FCF5ED', // Background color for the form card
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    justifyContent: 'center',
    width: '100%', // Stretch the card to the sides
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#C8102E', // Button background color
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#FCF5ED', // Button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#000', // Text color for "Already have an account?"
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  link: {
    color: '#C8102E', // Color for "Login here" link
    fontWeight: 'bold',
  },
});
