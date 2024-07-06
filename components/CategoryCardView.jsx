import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constant/styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CategoryCardView = ({ category }) => {
    const navigation = useNavigation();


  return (
  
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchRecipe', { category })}
    >
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{category.cat_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCardView;

const styles = StyleSheet.create({
  textWrapper: {
    backgroundColor: COLORS.wht,
    opacity: 0.6,
    width: SIZES.width - 100,
    height: 40,
    borderRadius: SIZES.small - 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontFamily: 'bold',
    color: COLORS.primary,
  },
});
