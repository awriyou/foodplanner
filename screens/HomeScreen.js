import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { COLORS, SIZES } from '../constant/styles';
import PopRecipe from '../components/PopRecipe';
import BroBy from '../components/BroBy';
const HomeScreen = ({ navigation }) => {
  const [isLiked, setIsLiked] = useState(false);

  const [keyCat, setKeyCat] = useState();

  const recipeData = [
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficult: 'Easy',
    },
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficult: 'Easy',
    },
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficult: 'Easy',
    },
  ];

  return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.headingContainer}>
            <View style={styles.heading1}>
              <Image
                style={styles.imageProf}
                source={require('../assets/image/profile kecil.png')}
              />

              <Text style={styles.name}>Hi, Ario Febri</Text>
            </View>
            <View style={styles.heading2}>
              <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                <Ionicons
                  name={isLiked ? 'heart' : 'heart-outline'}
                  size={24}
                  color={COLORS.secondary}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="settings" size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.midContainer}>
          <Image
            style={styles.imageMid}
            source={require('../assets/image/search.png')}
          />
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={SIZES.xLarge}
              style={styles.searchIcon}
            />

            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                //   value={searchInput}
                //   onChangeText={(input) => {
                //     // setSearchInput(input);
                //   }}
                onPress={() => navigation.navigate('SearchRecipe')}
                placeholder="Search Recipe Here!"
              />
            </View>
          </View>
        </View>

        <View style={styles.popRecipeContainer}>
          <Text style={styles.popRecipeText}>Popular Recipes</Text>
          <FlatList
            data={recipeData}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
            renderItem={({ item }) => <PopRecipe item={item} />}
          />
        </View>
        <BroBy />
      </SafeAreaView>
  );
};

export default HomeScreen;
