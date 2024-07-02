import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constant/styles';
import { useNavigation } from '@react-navigation/native';

const RecipeCardView = ({ item }) => {
  const navigation = useNavigation();
  const [optionVisible, setOptionVisible] = useState(false);
  return (
    <TouchableOpacity
      style={styles.containerWrapper}
      onPress={() => navigation.navigate('DetailRecipe', { item })}
    >
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
      {optionVisible ? (
        <View style={styles.optionWrapper}>
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
        </View>
      ) : (
        <View></View>
      )}
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCardView;

const styles = StyleSheet.create({
  containerWrapper: {
    // flex: 1,
    width: SIZES.width / 2 - 10,
    gap: 8,
    paddingHorizontal: 2,
    alignItems: 'center',
    // overflow: 'hidden'
},
container: {
    flex: 1,
    width: '100%',
    height: SIZES.height / 5,
    marginTop: 4,
    // marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 165,
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  desc: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLORS.dark,
    opacity: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textContainer: {},
  name: {
    fontFamily: 'bold',

    color: COLORS.wht,
  },
  difficult: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.wht,
  },
  optionWrapper: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    width: 160,
    marginBottom: 30,
    backgroundColor: COLORS.wht,
    borderRadius: 20,
    paddingHorizontal: 10,
    elevation: 10,
    opacity: 0.8
  },
  option1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 10,
  },
  option2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 10,
  },
});
