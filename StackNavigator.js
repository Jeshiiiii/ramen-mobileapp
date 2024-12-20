import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from './app/CartContext'; // Import the CartProvider

import Home from "./app/Home";
import Splash from "./app/Splash";
import Loading from './app/Loading';
import Signup from './app/Signup';
import Login from './app/Login';
import Menu from './app/Menu';
import Cart from './app/Cart';
import Profile from "./app/Profile";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false, // Hide the header for all screens
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({});
