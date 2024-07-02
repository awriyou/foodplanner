import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES } from '../../constant/styles';
import {Ionicons} from '@expo/vector-icons'

const ListPlanner = ({ day, navigation }) => {
  const data = [
    {
      date: '2024-07-04',
      recipeData: [
        {
          name: 'Nasi Goreng Kemangi',
          imageUrl:
            'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          difficult: 'Easy',
          ingredients: ['chicken fillet', 'sugar', 'chicken', 'salt', 'sasa'],
          steps: ['Step 1', 'Step 2', 'Step 3'],
          time: 'Breakfast',
        },
        {
          name: 'Ayam Bakar Madu',
          imageUrl:
            'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          difficult: 'Easy',
          ingredients: ['chicken fillet', 'sugar', 'chicken', 'salt', 'sasa'],
          steps: ['Step 1', 'Step 2', 'Step 3'],
          time: 'Lunch',
        },
      ],
    },
    {
      date: '2024-07-05',
      recipeData: [
        {
          name: 'Mie Rebus',
          imageUrl:
            'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          difficult: 'Easy',
          ingredients: ['mie', 'egg', 'salt', 'oil'],
          steps: ['Step 1', 'Step 2', 'Step 3'],
          time: 'Lunch',
        },
      ],
    },
  ];

  // Filter data based on selected day
  //get
  const filteredData = data.filter((item) => item.date === day);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe for {day}</Text>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setModalVisibility()}
      >
        {/* <Ionicons name="add" size={SIZES.xLarge + 5} color={COLORS.primary} /> */}
        <Text style={styles.addText}>Add Recipe</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData.length > 0 ? filteredData[0].recipeData : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recipeItem}
            onPress={() => navigation.navigate('DetailRecipe', { item })}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.contentWrapper}>
              <View style={styles.textWrapper}>
                <Text style={styles.recipeTime}>{item.time}</Text>
                <Text style={styles.recipeName}>{item.name}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="trash" size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.difficulty}>{item.difficult}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No recipes available for this day.</Text>}
      />
    </View>
  );
};

export default ListPlanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.wht,
  },
  title: {
    fontSize: SIZES.small,
    fontFamily: 'semiBold',
    marginBottom: 10,
    color: COLORS.primary,
    textAlign: 'center'
  },
  recipeItem: {
    marginBottom: 10,
    backgroundColor: COLORS.wht,
    ...SHADOWS.medium,
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  contentWrapper: {
    // width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingHorizontal: 8,
  },
  textWrapper: {
    gap: 4,
  },
  recipeName: {
    fontSize: 16,
    fontFamily: 'bold',
    color: COLORS.primary,
  },
  recipeTime: {
    fontSize: 12,
    fontFamily: 'semiBold',
  },
  difficulty: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    fontSize: 14,
    color: 'gray',
  },
  addBtn: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    backgroundColor: COLORS.wht,
    ...SHADOWS.medium,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 4,
  },
  addText: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
  },
});
