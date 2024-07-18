import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './detailrecipe.style';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constant/styles';
import BackButton from '../components/Header/BackButton';
import { useRoute } from '@react-navigation/native';
import useFetch from '../hook/useFetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DetailRecipeScreen = ({ navigation }) => {
  const { apiUrl } = useFetch();

  const [loader, setLoader] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [favoriteCount, setFavoriteCount] = useState(0); // Tambahkan state ini
  const route = useRoute();
  const item = route.params.recipe || route.params.item;

  async function favoriteOrNot() {
    setLoader(true);
    const id = await AsyncStorage.getItem('id');
    const parsedId = JSON.parse(id);
    const useId = `user${JSON.parse(id)}`;
    const currentUser = await AsyncStorage.getItem(useId);

    if (currentUser !== null) {
      setUserLogin(true);
      try {
        const response = await axios.get(
          `${apiUrl}api/users/favorite/${parsedId}`
        );
        // Check if the response contains any favorite recipes
        if (response.data.length > 0) {
          const favoriteRecipe = response.data.find(
            (favorite) => favorite._id === item._id
          );
          if (favoriteRecipe) {
            setIsLiked(true);
          }
        }
      } catch (error) {
        console.error('Error fetching favorite recipes:', error);
      } finally {
        setLoader(false);
      }
    }
  }

  async function fetchFavoriteCount() {
    try {
      const response = await axios.get(
        `${apiUrl}api/recipes/favoriteCount/${item._id}`
      );
      setFavoriteCount(response.data.count);
    } catch (error) {
      console.error('Error fetching favorite count:', error);
    }
  }

  async function addToFavorites() {
    const id = await AsyncStorage.getItem('id');
    const parsedId = JSON.parse(id);
    try {
      const response = await axios.post(`${apiUrl}api/users/favorite`, {
        id: parsedId,
        recipeId: item._id,
      });
      if (response.status === 200) {
        setIsLiked(true);
        fetchFavoriteCount(); // Update favorite count
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  }

  async function removeFromFavorites() {
    const id = await AsyncStorage.getItem('id');
    const parsedId = JSON.parse(id);
    try {
      const response = await axios.delete(
        `${apiUrl}api/users/favorite/${parsedId}`,
        { data: { recipeId: item._id } }
      );
      if (response.status === 200) {
        setIsLiked(false);
        fetchFavoriteCount(); // Update favorite count
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  }

  useEffect(() => {
    favoriteOrNot();
    fetchFavoriteCount(); // Fetch favorite count when component mounts
  }, []);

  const formatText = (text) => {
    const upper = text.toUpperCase();
    const words = upper.split(' ');
    if (words.length > 4) {
      return `${words.slice(0, 4).join(' ')}\n${words.slice(4).join(' ')}`;
    }
    return text;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton />
      <View style={styles.container}>
        <Image source={{ uri: item.recipe_img }} style={styles.image} />
        <View style={styles.containerInfoWrapper}>
          <View style={styles.infoWrapper}>
            <View style={styles.titleIconWrapper}>
              <Text style={styles.title} numberOfLines={2}>
                {formatText(item.name)}
              </Text>
              <View style={styles.iconWrapper}>
                <TouchableOpacity>
                  <Ionicons
                    name="share-social"
                    size={24}
                    color={COLORS.primary}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
                {userLogin ? (
                  loader === false ? (
                    <TouchableOpacity
                      onPress={() => {
                        if (isLiked) {
                          removeFromFavorites();
                        } else {
                          addToFavorites();
                        }
                      }}
                    >
                      <Ionicons
                        name={isLiked ? 'heart' : 'heart-outline'}
                        size={24}
                        color={COLORS.secondary}
                      />
                    </TouchableOpacity>
                  ) : (
                    <ActivityIndicator color="red"/>
                  )
                ) : (
                  <View></View>
                )}
              </View>
            </View>
            <View style={styles.detailWrapper}>
              <View style={styles.detail}>
                <Ionicons
                  name="time-outline"
                  size={24}
                  color={COLORS.secondary}
                />
                <Text style={styles.detailText}>{item.level}</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="alert" size={24} color={COLORS.secondary} />
                <Text style={styles.detailText}>
                  {item.ingredients.length} Ingredients
                </Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="analytics" size={24} color={COLORS.secondary} />
                <Text style={styles.detailText}>{item.steps.length} Steps</Text>
              </View>
            </View>
            <View style={styles.likedBy}>
              <Text style={styles.likedByText}>
                Liked By {favoriteCount} people
              </Text>
            </View>
          </View>
          <View style={styles.descWrapper}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[
                  styles.toggle,
                  {
                    backgroundColor: toggle ? COLORS.primary : COLORS.wht,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },
                ]}
                onPress={() => setToggle(!toggle)}
              >
                <Text style={styles.toggleText}>Ingredients</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggle,
                  {
                    backgroundColor: !toggle ? COLORS.primary : COLORS.wht,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  },
                ]}
                onPress={() => setToggle(!toggle)}
              >
                <Text style={styles.toggleText}> Steps </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.list}>
              <FlatList
                data={toggle ? item.ingredients : item.steps}
                renderItem={({ item }) =>
                  toggle ? (
                    <View style={styles.ingredientsContainer}>
                      <View style={styles.ingredients}>
                        <Ionicons
                          name="alert"
                          size={24}
                          color={COLORS.secondary}
                        />
                        <View>
                          <Text style={styles.infoList}>{item}</Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.ingredients}>
                      <MaterialCommunityIcons
                        name="chef-hat"
                        size={24}
                        color={COLORS.secondary}
                      />
                      <Text
                        style={[
                          styles.infoList,
                          {
                            fontSize: SIZES.small - 2,
                          },
                        ]}
                      >
                        {item}
                      </Text>
                    </View>
                  )
                }
              />
              <FlatList />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailRecipeScreen;
