import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useCart } from './CartContext';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for back icon

// Create a mapping of item names to local images
const imageMap = {
'hakata ramen': require('./assets/hakata.jpg'),
'hakodate ramen': require('./assets/hakodate.jpg'),
'kitakata ramen': require('./assets/kitakata.jpg'),
'okinawa ramen': require('./assets/okinawa.jpg'),
'tsukemen ramen': require('./assets/tsukemen.jpg'),
'wakayama ramen': require('./assets/wakayama.jpg'),
'black king ramen': require('./assets/blackking.jpg'),
'bolzico ramen': require('./assets/bolzico.jpg'),
'butao king ramen': require('./assets/butaoking.jpg'),
'red king ramen': require('./assets/redking.jpg'),
'ramen combo a': require('./assets/LogoPNG.png'),
'ramen combo b': require('./assets/LogoPNG.png'),
'ramen combo c': require('./assets/LogoPNG.png'),
'ramen combo d': require('./assets/LogoPNG.png'),
'edamame': require('./assets/edamame.png'),
'gyoza': require('./assets/gyoza.jpg'),
'karaage': require('./assets/karaage.jpg'),
'onigiri': require('./assets/onigiri.png'),
'takoyaki': require('./assets/takoyaki.jpg'),
'tempura': require('./assets/tempura.png'),
'boiled eggs': require('./assets/boiledeggs.jpg'),
'chashu': require('./assets/chashu.jpg'),
'green onions': require('./assets/greenonions.jpg'),
'kikurage': require('./assets/kikurage.jpg'),
'menma': require('./assets/menma.jpg'),
'nori': require('./assets/nori.jpg'),
'bottled water': require('./assets/water.jpg'),
'mountain dew': require('./assets/mountaindew.png'),
'orange juice': require('./assets/orange.png'),
'pepsi': require('./assets/pepsi.png'),
'pineapple juice': require('./assets/pineapple.png'),
'rootbeer': require('./assets/rootbeer.jpg'),
'sprite': require('./assets/sprite.jpg'),
};

export default function Cart({ navigation }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    clearCart();
  };

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Your Cart</Text>
      
      <ScrollView>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              {/* Item Image */}
              <Image 
                source={imageMap[item.name.toLowerCase()]} // Use the imageMap to get the correct image
                style={styles.itemImage} 
              />

              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                
                {/* Quantity Control */}
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.name)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.name)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Price and Remove Button */}
              <View>
                <Text style={styles.itemPrice}>₱{(item.price * item.quantity).toFixed(2)}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.name)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}
      </ScrollView>
      
      {/* Total Amount */}
      {cartItems.length > 0 && (
        <Text style={styles.totalAmount}>Total: ₱{totalAmount.toFixed(2)}</Text>
      )}
      
      {/* Place Order Button */}
      <TouchableOpacity onPress={handlePlaceOrder} style={styles.placeOrderButton}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4E1D2',
  },
  backIcon: {
    position: 'absolute',
    top: 45,
    left: 30,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    color: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#C8102E',
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    color: '#C8102E',
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#FF5733',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  placeOrderButton: {
    padding: 15,
    backgroundColor: '#C8102E',
    borderRadius: 10,
    marginTop: 20,
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
