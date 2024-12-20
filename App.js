import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import SnackNavigator from "./StackNavigator";
import { CartProvider } from './app/CartContext'; // Import the CartProvider

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SnackNavigator />
    </>
  );
} 




