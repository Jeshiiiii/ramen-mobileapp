import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use for the cart and bottom nav icons
import { useCart } from './CartContext'; // Import the Cart Context

export default function Menu({ navigation }) {
  const { cartItems, addToCart } = useCart(); // Get cart items and addToCart function
  const [selectedCategory, setSelectedCategory] = useState('ramen'); // Default to ramen

  // Function to get menu items based on category
  const getMenuItems = () => {
    switch (selectedCategory) {
      case 'ramen':
        return ramenItems;
      case 'combo':
        return comboItems;
      case 'side':
        return sideItems;
      case 'topping':
        return toppingItems;
      case 'drinks':
        return drinkItems;
      default:
        return [];
    }
  };

  return (
    <View style={styles.container}>
      {/* Top section with logo and cart icon */}
      <View style={styles.topSection}>
        <Image
          source={require('./assets/LogoPNG.png')} // Replace with your actual logo file path
          style={styles.logo}
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

      {/* Menu card container */}
      <View style={styles.cardContainer}>
        {/* Add horizontal scroll for category buttons */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'ramen' && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory('ramen')}
          >
            <Text style={styles.categoryText}>Ramen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'combo' && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory('combo')}
          >
            <Text style={styles.categoryText}>Combo Meals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'side' && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory('side')}
          >
            <Text style={styles.categoryText}>Side Dishes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'topping' && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory('topping')}
          >
            <Text style={styles.categoryText}>Toppings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'drinks' && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory('drinks')}
          >
            <Text style={styles.categoryText}>Drinks</Text>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView showsVerticalScrollIndicator={false}>
          {getMenuItems().map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <Image source={item.image} style={styles.menuImage} />
              <View style={styles.menuDetails}>
                <Text style={styles.menuTitle}>{item.name}</Text>
                <Text style={styles.menuPrice}>₱{item.price}</Text>
                <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

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

// Example menu items for each category
const ramenItems = [
  { name: 'Hakata Ramen', price: '129.99', image: require('./assets/hakata.jpg') },
  { name: 'Hakodate Ramen', price: '129.99', image: require('./assets/hakodate.jpg') },
  { name: 'Kitakata Ramen', price: '159.99', image: require('./assets/kitakata.jpg') },
  { name: 'Okinawa Ramen', price: '159.99', image: require('./assets/okinawa.jpg') },
  { name: 'Tsukemen Ramen', price: '169.99', image: require('./assets/tsukemen.jpg') },
  { name: 'Wakayama Ramen', price: '169.99', image: require('./assets/wakayama.jpg') },
  { name: 'Black King Ramen', price: '179.99', image: require('./assets/blackking.jpg') },
  { name: 'Bolzico Ramen', price: '179.99', image: require('./assets/bolzico.jpg') },
  { name: 'Butao King Ramen', price: '199.99', image: require('./assets/butaoking.jpg') },
  { name: 'Red King Ramen', price: '199.99', image: require('./assets/redking.jpg') },
];

const comboItems = [
  { name: 'Ramen Combo A', price: '349.99', image: require('./assets/LogoPNG.png') },
  { name: 'Ramen Combo B', price: '249.99', image: require('./assets/LogoPNG.png') },
  { name: 'Ramen Combo C', price: '349.99', image: require('./assets/LogoPNG.png') },
  { name: 'Ramen Combo D', price: '249.99', image: require('./assets/LogoPNG.png') },
];

const sideItems = [
  { name: 'Edamame', price: '49.99', image: require('./assets/edamame.png') },
  { name: 'Gyoza', price: '59.99', image: require('./assets/gyoza.jpg') },
  { name: 'Karaage', price: '79.99', image: require('./assets/karaage.jpg') },
  { name: 'Onigiri', price: '69.99', image: require('./assets/onigiri.png') },
  { name: 'Takoyaki', price: '59.99', image: require('./assets/takoyaki.jpg') },
  { name: 'Tempura', price: '79.99', image: require('./assets/tempura.png') },
];

const toppingItems = [
  { name: 'Boiled Eggs', price: '11.99', image: require('./assets/boiledeggs.jpg') },
  { name: 'Chashu', price: '44.99', image: require('./assets/chashu.jpg') },
  { name: 'Green Onions', price: '11.99', image: require('./assets/greenonions.jpg') },
  { name: 'Kikurage', price: '19.99', image: require('./assets/kikurage.jpg') },
  { name: 'Menma', price: '19.99', image: require('./assets/menma.jpg') },
  { name: 'Nori', price: '29.99', image: require('./assets/nori.jpg') },
];

const drinkItems = [
  { name: 'Bottled Water', price: '30.00', image: require('./assets/water.jpg') },
  { name: 'Mountain Dew', price: '35.00', image: require('./assets/mountaindew.png') },
  { name: 'Orange Juice', price: '40.00', image: require('./assets/orange.png') },
  { name: 'Pepsi', price: '35.00', image: require('./assets/pepsi.png') },
  { name: 'Pineapple Juice', price: '40.00', image: require('./assets/pineapple.png') },
  { name: 'Rootbeer', price: '35.00', image: require('./assets/rootbeer.jpg') },
  { name: 'Sprite', price: '35.00', image: require('./assets/sprite.jpg') },
];


// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E1D2', // Upper background color
  },
  topSection: {
    backgroundColor: '#F4E1D2',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%', // Adjust the top section height
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  logo: {
    width: 190,
    top: 20,
    height: 190,
    flex: 1,
    resizeMode: 'contain',
  },
  cartIcon: {
    position: 'absolute',
    right: 20, // Cart icon positioning to the top right
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
    color: '#fff',
    fontSize: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    backgroundColor: '#FCF5ED',
    paddingHorizontal: 10,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#3E2723',
    marginHorizontal: 5, // Add margin for spacing between buttons
  },
  selectedCategory: {
    backgroundColor: '#C8102E', // Highlight the selected category
  },
  categoryText: {
    color: '#FCF5ED',
    fontSize: 14,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FCF5ED',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingTop: 10, // Adjust to fit the overlaid category navigation
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  menuImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 10,
  },
  menuDetails: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  menuPrice: {
    fontSize: 16,
    color: '#C8102E',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#C8102E',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#F4E1D2',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
});