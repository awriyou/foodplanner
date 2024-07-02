import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './menus.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constant/styles';

const Menus = ({
  darkMode,
  Logout,
  navigation,
}) => {
  const [toggle, setToggle] = useState(false);
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
        <View style={styles.buttonWrapper}>
          <Ionicons name="contrast" size={30} color={COLORS.primary} />
          <View style={styles.descIcon}>
            <Text style={styles.buttonText}>Dark Mode</Text>
            <TouchableOpacity
              style={styles.toggleWrapper}
              onPress={() => setToggle(!toggle)}
            >
              <View
                style={[styles.toggle, toggle ? { right: 2 } : { left: 2 }]}
              ></View>
            </TouchableOpacity>
          </View>
        </View>
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
          onPress={() => navigation.navigate('')}
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
