import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './menus.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constant/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Menus = ({
  darkMode,
  Logout,
  navigation,
}) => {
  
  const [toggle, setToggle] = useState(false);


    async function userLogout() {
      const id = await AsyncStorage.getItem('id');
      const useId = `user${JSON.parse(id)}`;
      try {
        await AsyncStorage.multiRemove([useId, 'id']);
        navigation.replace('Tabs');
      } catch (error) {
        console.log('Error Logging out your account: ', error);
      }
    }

    function logout() {
      Alert.alert('Logout', 'Are you sure you want to logout?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => userLogout() },
        // { defaultIndex: 1 },
      ]);
    }
  return (
    <View style={{ justifyContent: 'center' }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('LikedRecipes')}
        >
          <Ionicons name="heart" size={30} color={COLORS.primary} />
          <View style={styles.descIcon}>
            <Text style={styles.buttonText}>Liked Recipe</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color={COLORS.dark}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('ChangePassword')}
        >
          <Ionicons name="lock-closed" size={30} color={COLORS.primary} />
          <View style={styles.descIcon}>
            <Text style={styles.buttonText}>Change Password</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color={COLORS.dark}
            />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('Setting')}
        >
          <Ionicons name="settings" size={30} color={COLORS.primary} />
          <View style={styles.descIcon}>
            <Text style={styles.buttonText}>Settings</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color={COLORS.dark}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {logout()}}
        >
          <Ionicons name="log-out" size={30} color={COLORS.primary} />
          <View style={styles.descIcon}>
            <Text style={styles.buttonText}>Log out</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color={COLORS.dark}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menus;
