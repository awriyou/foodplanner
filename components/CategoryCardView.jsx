import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constant/styles';
import { useNavigation } from '@react-navigation/native';

const CategoryCardView = ({ category }) => {
  const navigation = useNavigation()
  return (
    // <TouchableOpacity style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <Image source={{ uri: category.imageUrl }} style={styles.image} />
    //   </View>

    // </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('SearchRecipe', {category})}>
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
    // marginHorizontal: 2,
    marginVertical: 5,
  },
  text: {
    fontFamily: 'bold',
    color: COLORS.primary,
  },

  // imageContainer: {
  //   flex: 1,
  //   width: 170,
  //   // backgroundColor: COLORS.secondary,
  //   borderTopRightRadius: SIZES.small,
  //   borderTopLeftRadius: SIZES.small,
  //   // overflow: 'hidden',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // image: {
  //   width: '100%',
  //   height: '100%',
  //   borderTopRightRadius: SIZES.small - 2,
  //   borderTopLeftRadius: SIZES.small - 2,
  //   resizeMode: 'stretch',
  // },
});
