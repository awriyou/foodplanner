import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import recipeData from '../store/data'
import { SIZES } from "../constant/styles";
import RecipeCardView from "../components/Search/RecipeCardView";

const LikedRecipesScreen = () => {
  return (
    <View style={styles.containerList}>
      <FlatList
        data={recipeData}
        numColumns={2}
        // contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => <RecipeCardView item={item}/>}
      />
    </View>
  );
};

export default LikedRecipesScreen;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
