import { ActivityIndicator, FlatList, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RecipeCardView from "./RecipeCardView";
import { COLORS, SIZES } from "../../constant/styles";
import styles from "./reciperow.style";
import useFetch from "../../hook/useFetch";

const RecipeRow = ({data}) => {
  const {isLoading, error} = useFetch()
  const [isSearch, setIsSearch] = useState(true)
  return (

      <View
        style={{
          height: SIZES.height - 160,
          gap: 10,
          alignItems: 'center',
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            numColumns={2}
            // contentContainerStyle={{ columnGap: SIZES.medium }}
            renderItem={({ item }) => (
              <RecipeCardView item={item} search={isSearch} />
            )}
            initialNumToRender={6}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        )}
      </View>
  );
};

export default RecipeRow;
