import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  const [userEmail, setUserEmail] = useState("johndoe@example.com");

  return (
    <View style={styles.container}>
      {/* Title Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual profile picture URI
            style={styles.profilePicture}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Picture</Text>
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          {isEditing ? (
            <>
              <TextInput
                style={styles.input}
                value={userName}
                onChangeText={setUserName}
                placeholder="Enter your name"
              />
              <TextInput
                style={styles.input}
                value={userEmail}
                onChangeText={setUserEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setIsEditing(false)}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.userName}>{userName}</Text>
              <Text style={styles.userEmail}>{userEmail}</Text>
              <TouchableOpacity
                style={styles.editDetailsButton}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.editDetailsText}>Edit Details</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Account Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderHistory')}>
            <Text style={styles.buttonText}>Order History</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E1D2',
  },
  header: {
    backgroundColor: '#C8102E',
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FCF5ED',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#3E2723',
    borderWidth: 2,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#C8102E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#FCF5ED',
    fontSize: 14,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  userEmail: {
    fontSize: 16,
    color: '#3E2723',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  editDetailsButton: {
    marginTop: 10,
    backgroundColor: '#C8102E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  editDetailsText: {
    color: '#FCF5ED',
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#3E2723',
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 10, 
    alignItems: 'center',
    marginTop: 10, 
    
  },
  saveButtonText: {
    color: '#FCF5ED',
    fontSize: 16,
  },
  buttonSection: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#C8102E',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FCF5ED',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#3E2723',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#FCF5ED',
    fontSize: 16,
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
  navText: {
    fontSize: 12,
    color: '#3E2723',
  },
});

export default Profile;
