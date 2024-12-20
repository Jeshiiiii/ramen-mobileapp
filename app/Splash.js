import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Loading');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/LogoPNG.png')} // Use local image
        style={styles.logo} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E1D2', // New background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400, // Adjust size as needed
    height: 400,
  },
});
