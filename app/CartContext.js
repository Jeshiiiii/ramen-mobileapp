import React, { createContext, useContext, useState } from 'react';

// Create Cart Context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map((cartItem) =>
        cartItem.name === item.name ? { ...existingItem, quantity: existingItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // Ensure item has image property
    }
  };

  const removeFromCart = (itemName) => {
    setCartItems(cartItems.filter((item) => item.name !== itemName));
  };

  const increaseQuantity = (itemName) => {
    setCartItems(cartItems.map((item) => 
      item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemName) => {
    setCartItems(cartItems.map((item) => 
      item.name === itemName ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => {
  return useContext(CartContext);
};
