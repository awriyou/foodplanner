import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './poprecipe.style';
import { SIZES } from '../constant/styles';
import PopRecipeCardView from './PopRecipeCardView';

const PopRecipe = () => {
    const recipeData = [
      {
        name: 'Nasi Goreng Kemangi',
        imageUrl:
          'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        difficult: 'Easy',
      },
      {
        name: 'Nasi Goreng Kemangi',
        imageUrl:
          'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        difficult: 'Easy',
      },
      {
        name: 'Nasi Goreng Kemangi',
        imageUrl:
          'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        difficult: 'Easy',
      },
    ];
  return (
    <View style={styles.popRecipeContainer}>
      <Text style={styles.popRecipeText}>Popular Recipes</Text>
      <FlatList
        data={recipeData}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => <PopRecipeCardView item={item} />}
      />
    </View>
  );
};

export default PopRecipe;
