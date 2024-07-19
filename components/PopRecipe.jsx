import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './poprecipe.style';
import { COLORS, SIZES } from '../constant/styles';
import PopRecipeCardView from './PopRecipeCardView';
import axios from 'axios';
import useFetch from '../hook/useFetch';

const PopRecipe = () => {
  const { apiUrl } = useFetch();
  const [loader, setLoader] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  async function getPopularRecipe() {
    setLoader(true);
    try {
      const response = await axios.get(`${apiUrl}api/recipes/popular/recipes`);
      setRecipeData(response.data);
    } catch (error) {
      console.error('Error getting popular recipes:', error);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getPopularRecipe();
  }, []);
  return (
    <View style={styles.popRecipeContainer}>
      <Text style={styles.popRecipeText}>Popular Recipes</Text>
      {loader ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} style={{marginVertical: 20}}/>
      ) : (
        <FlatList
          data={recipeData}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => <PopRecipeCardView item={item} />}
        />
      )}
    </View>
  );
};

export default PopRecipe;
