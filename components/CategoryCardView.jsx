import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constant/styles";

const CategoryCardView = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCardView;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // gap: 20,
    width: 170,
    height: 140,
    flex: 1,
    marginBottom: SIZES.large,
    borderRadius: SIZES.small,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    // backgroundColor: COLORS.secondary,
    borderTopRightRadius: SIZES.small,
    borderTopLeftRadius: SIZES.small,
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: SIZES.small - 2,
    borderTopLeftRadius: SIZES.small - 2,
    resizeMode: 'stretch',
  },
  textWrapper: {
    backgroundColor: COLORS.dark,
    opacity: 0.6,
    width: 170,
    borderBottomRightRadius: SIZES.small - 2,
    borderBottomLeftRadius: SIZES.small - 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'bold',
    color: COLORS.wht,
  },
});
