import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './poprecipe.style';
import { COLORS } from '../constant/styles';

const PopRecipe = ({ item }) => {
    const [optionVisible, setOptionVisible] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.desc}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.difficult}>{item.difficult}</Text>
          </View>
          <TouchableOpacity onPress={() => setOptionVisible(!optionVisible)}>
            <Ionicons name="ellipsis-vertical" size={24} color={COLORS.wht} />
          </TouchableOpacity>
        </View>
      </View>
      {optionVisible ? (<View style={styles.optionWrapper}>
        <View>
          <TouchableOpacity style={styles.option1}>
            <Ionicons name="add-sharp" size={24} color={COLORS.dark} />
            <Text>Add To Calendar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.option2}>
            <Ionicons name="heart-outline" size={24} color={COLORS.dark} />
            <Text>Add To Favorite</Text>
          </TouchableOpacity>
        </View>
      </View>): (
        <View></View>
      )}
    </TouchableOpacity>
  );
};

export default PopRecipe;
