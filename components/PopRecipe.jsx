import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './poprecipe.style';
import { SIZES } from '../constant/styles';
import PopRecipeCardView from './PopRecipeCardView';

const PopRecipe = ({recipeData, loader}) => {
  
  return (
    <View style={styles.popRecipeContainer}>
      <Text style={styles.popRecipeText}>Popular Recipes</Text>
      <FlatList
        data={recipeData}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => <PopRecipeCardView item={item} loader={loader}/>}
      />
    </View>
  );
};

export default PopRecipe;
