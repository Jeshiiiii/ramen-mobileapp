import React from 'react'; 
import { View, Text, Image, ScrollView, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use for the cart and bottom nav icons
import { useCart } from './CartContext'; // Import the Cart Context

export default function Home({ navigation }) {
  const { cartItems, addToCart } = useCart(); // Get cart items and addToCart function
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('./assets/LogoPNG.png')} // Replace with your logo image from assets
            style={styles.logoImage}
          />
           <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartIcon}>
          <Ionicons name="cart-outline" size={40} color="black" />
          {cartItems.length > 0 && (
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        </View>

        {/* Home Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Ramen Rhapsody</Text>
          <Text style={styles.subheading}>Pleasure awaits your discovery.</Text>
          <Text style={styles.paragraph}>Celebrate the harmony of flavors with every bite, indulge in the symphony of tastes at Ramen Rhapsody</Text>
          
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>About Us</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/RamenText.png')} // Replace with your image from assets
              style={styles.aboutImage}
              resizeMode="contain" // Adjust to fit the screen while maintaining aspect ratio
            />
          </View>
          <Text style={styles.paragraph}>
            Ramen Rhapsody is a starting company, founded in 2023. It's a restaurant that offers different kinds of ramen, a noodle soup dish that originated from China and became popular in Japan.
          </Text>
         
        </View>

        {/* Menu Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Must Try</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Bolzico Sukiyaki King</Text>
            <Image
              source={{ uri: 'https://cdn.glitch.global/9b76d464-48b3-4067-950e-d042fa5fd19a/Bolzico%20Sukiyaki%20King.jpg?v=1681723201138' }}
              style={styles.menuImage}
            />
            <Text style={styles.paragraph}>Thinly sliced beef, tofu, and a variety of vegetables. Many people serve hot cooked meat and veggies dipped in a beaten raw egg.</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Butao King</Text>
            <Image
              source={{ uri: 'https://cdn.glitch.global/9b76d464-48b3-4067-950e-d042fa5fd19a/Butao%20King.jpg?v=1681723354598' }}
              style={styles.menuImage}
            />
            <Text style={styles.paragraph}>BUTAO Ramen is a typical tonkotsu ramen with a thick milky pork broth. BUTA means pork and O means King.</Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Contact Us</Text>
          <View>
            <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#666" />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" />
            <TextInput style={styles.input} placeholder="Phone" keyboardType="numeric" placeholderTextColor="#666" />
            <TextInput style={styles.input} placeholder="Message" multiline numberOfLines={4} placeholderTextColor="#666" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

       {/* Bottom Navigation with Icons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={30} color="black" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="restaurant-outline" size={30} color="black" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={30} color="black" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E1D2', // Background color consistency
  },
  scrollContainer: {
    padding: 5,
  },
  header: {
    flexDirection: 'row', // Ensures the logo and cart are in a row
    justifyContent: 'space-between', // Space between logo and cart
    alignItems: 'center', // Align items vertically in the center
    paddingHorizontal: 20, // Padding on both sides
    paddingTop: 25, // Add some padding at the top
    height: 100, // Adjust height to your need
  },
  logoImage: {
    width: 190,
    height: 190,
    flex: 1,
    resizeMode: 'contain',
    top: 20,
  },
  cartIcon: {
    position: 'absolute',
    right: 20, // Cart icon positioning to the top right
    top: 40,
  },
  cartCount: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#C8102E',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  cartCountText: {
    color: '#FCF5ED', //brown #fff
    fontSize: 10,
  },
  section: {
    marginBottom: 30,
    marginTop: 20, // Pushes the first section down to avoid overlap
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C8102E', // Use the app's primary color for headings
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#3E2723', 
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#3E2723', 
    marginBottom: 10,
    lineHeight: 22,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C8102E', // Use the app's primary color for card titles
    marginBottom: 10,
  },
  menuImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#C8102E', // Consistent button color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FCF5ED', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#F4E1D2',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
  imageContainer: {
    width: '100%', // Ensures the image container takes full width
    height: 250, // Adjust this height as needed
    overflow: 'hidden', // Ensures that any overflowing content is hidden
  },
  aboutImage: {
    width: '100%', // Makes the image responsive
    height: '100%', // Makes the image responsive
  },
});