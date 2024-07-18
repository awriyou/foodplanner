import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import recipeData from '../store/data';
import { SIZES } from '../constant/styles';
import RecipeCardView from '../components/Search/RecipeCardView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetch from '../hook/useFetch';
import MustLogin from '../components/Auth/MustLogin';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const LikedRecipesScreen = ({ navigation }) => {
  const { apiUrl } = useFetch();

  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState(null);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [userLogin, setUserLogin] = useState(false);

  async function checkExistingUser() {
    setLoader(true);
    const id = await AsyncStorage.getItem('id');
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        // console.log(userData)
        setUserLogin(true);
      }
    } catch (error) {
      console.log('Error retrieving the data: ', error);
    } finally {
      setLoader(false);
    }
  }

  async function getFavoriteData() {
    const id = await AsyncStorage.getItem('id');
    const parsedId = JSON.parse(id);
    setLoader(true);
    if (parsedId !== null) {
      try {
        const response = await axios.get(
          `${apiUrl}api/users/favorite/${parsedId}`
        );
        setLikedRecipes(response.data);
        // console.log(likedRecipes)
      } catch (error) {
        console.log('Error : ', error);
      } finally {
        setLoader(false);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      checkExistingUser();
      getFavoriteData();
    }, [])
  );

  return (
    <View style={styles.containerList}>
      {loader === false ? (
        <>
          {!userLogin ? <MustLogin navigation={navigation} /> : <View></View>}
          <FlatList
            data={likedRecipes}
            numColumns={2}
            // contentContainerStyle={{ columnGap: SIZES.medium }}
            renderItem={({ item }) => <RecipeCardView item={item} />}
          />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default LikedRecipesScreen;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
  },
});
