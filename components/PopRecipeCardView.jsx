import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constant/styles';
import { useNavigation } from '@react-navigation/native';

const PopRecipeCardView = ({ item }) => {
  const navigation = useNavigation();
  // const [optionVisible, setOptionVisible] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailRecipe', { item: item.recipe })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.recipe.recipe_img }}
            style={styles.image}
          />
        </View>
        <View style={styles.desc}>
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {item.recipe.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              <Text style={styles.difficult}>{item.recipe.level}</Text>
              <Text style={styles.favoriteCount}>
                {item.favoriteCount} Liked this recipe
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 165,
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 165,
    borderRadius: 20,
  },
  desc: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLORS.dark,
    opacity: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: '40%'
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'bold',
    color: COLORS.wht,
  },
  difficult: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.wht,
  },
  favoriteCount: {
    fontFamily: 'regular',
    fontSize: SIZES.xSmall,
    color: 'white',
  },
  optionWrapper: {
    position: 'absolute',
    bottom: -10,
    right: 40,
    width: 160,
    marginBottom: 30,
    backgroundColor: COLORS.wht,
    borderRadius: 20,
    paddingHorizontal: 10,
    elevation: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
});

export default PopRecipeCardView;
