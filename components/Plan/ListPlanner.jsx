import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES } from '../../constant/styles';
import {Ionicons} from '@expo/vector-icons'

// const ListPlanner = ({ day, navigation, setModalVisibility }) => {
//   const data = [
//     {
//       date: '2024-07-04',
//       recipeData: [
//         {
//           name: 'Nasi Goreng Kemangi',
//           imageUrl:
//             'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//           difficult: 'Easy',
//           ingredients: ['chicken fillet', 'sugar', 'chicken', 'salt', 'sasa'],
//           steps: ['Step 1', 'Step 2', 'Step 3'],
//           time: 'Breakfast',
//         },
//         {
//           name: 'Ayam Bakar Madu',
//           imageUrl:
//             'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//           difficult: 'Easy',
//           ingredients: ['chicken fillet', 'sugar', 'chicken', 'salt', 'sasa'],
//           steps: ['Step 1', 'Step 2', 'Step 3'],
//           time: 'Lunch',
//         },
//       ],
//     },
//     {
//       date: '2024-07-05',
//       recipeData: [
//         {
//           name: 'Mie Rebus',
//           imageUrl:
//             'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//           difficult: 'Easy',
//           ingredients: ['mie', 'egg', 'salt', 'oil'],
//           steps: ['Step 1', 'Step 2', 'Step 3'],
//           time: 'Lunch',
//         },
//       ],
//     },
//   ];

//   // Filter data based on selected day
//   //get
//   const filteredData = data.filter((item) => item.date === day);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Recipe for {day}</Text>
//       <TouchableOpacity
//         style={styles.addBtn}
//         onPress={() => setModalVisibility(true)}
//       >
//         {/* <Ionicons name="add" size={SIZES.xLarge + 5} color={COLORS.primary} /> */}
//         <Text style={styles.addText}>Add Recipe</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={filteredData.length > 0 ? filteredData[0].recipeData : []}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.recipeItem}
//             onPress={() => navigation.navigate('DetailRecipe', { item })}
//           >
//             <Image source={{ uri: item.imageUrl }} style={styles.image} />
//             <View style={styles.contentWrapper}>
//               <View style={styles.textWrapper}>
//                 <Text style={styles.recipeTime}>{item.time}</Text>
//                 <Text style={styles.recipeName}>{item.name}</Text>
//               </View>
//               <TouchableOpacity>
//                 <Ionicons name="trash" size={24} color={COLORS.secondary} />
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.difficulty}>{item.difficult}</Text>
//           </TouchableOpacity>
//         )}
//         ListEmptyComponent={<Text>No recipes available for this day.</Text>}
//       />
//     </View>
//   );
// };

const ListPlanner = ({
  day,
  navigation,
  setModalVisibility,
  plannerData,
  handleDeleteRecipe,
}) => {
  // Filter data based on selected day
  const filteredData = plannerData.filter((item) => item.date === day);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe for {day}</Text>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setModalVisibility(true)}
      >
        <Text style={styles.addText}>Add Recipe</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData.length > 0 ? filteredData[0].recipeData : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.recipeItem}
            onPress={() => navigation.navigate('DetailRecipe', item.recipeData )}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.contentWrapper}>
              <View style={styles.textWrapper}>
                <Text style={styles.recipeTime}>{item.time}</Text>
                <Text style={styles.recipeName}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteRecipe(day, index)}>
                <Ionicons name="trash" size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.recipeDate}>{item.date}</Text>
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


export default ListPlanner;

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
