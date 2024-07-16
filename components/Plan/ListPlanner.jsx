import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS, SIZES } from '../../constant/styles';

const ListPlanner = ({
  day,
  navigation,
  setModalVisibility,
  plannerData,
  handleDeleteRecipe,
}) => {
  // Filter data based on selected day
  const filteredData = plannerData.filter((item) => item.date.substring(0, 10) === day);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes for {day}</Text>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setModalVisibility(true)}
      >
        <Text style={styles.addText}>Add Recipe</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData.length > 0 ? filteredData[0].recipes : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.recipeItem}
            onPress={() => navigation.navigate('DetailRecipe', { item })}
          >
            <Image
              source={{ uri: item.recipe_img }}
              style={styles.image}
            />
            <View style={styles.contentWrapper}>
              <View style={styles.textWrapper}>
                <Text style={styles.recipeTime}>{plannerData[1].time}</Text>
                <Text style={styles.recipeName}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteRecipe(day, index)}>
                <Ionicons name="trash" size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.recipeDate}>{day}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            No recipes available for this day.
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.light,
    marginBottom: 30,
    borderRadius: 10,
    width: SIZES.width - 50,
    ...SHADOWS.light,
  },
  addBtn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  addText: {
    color: COLORS.wht,
    fontSize: 16,
    fontFamily: 'semiBold',
  },
  title: {
    fontSize: 18,
    fontFamily: 'bold',
    marginBottom: 10,
    color: COLORS.primary,
  },
  recipeItem: {
    backgroundColor: COLORS.light,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    ...SHADOWS.light,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textWrapper: {
    flex: 1,
  },
  recipeName: {
    fontSize: 16,
    fontFamily: 'regular',
    color: COLORS.primary,
  },
  recipeTime: {
    fontSize: 14,
    fontFamily: 'regular',
    color: COLORS.secondary,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'regular',
    color: COLORS.secondary,
  },
});

export default ListPlanner;
