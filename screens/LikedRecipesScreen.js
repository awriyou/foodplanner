import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import recipeData from '../store/data';
import { SIZES } from '../constant/styles';
import RecipeCardView from '../components/Search/RecipeCardView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetch from '../hook/useFetch';
import MustLogin from '../components/Auth/MustLogin';
import axios from 'axios';

const LikedRecipesScreen = ({navigation}) => {
  const { apiUrl } = useFetch();
  
  const [isLoading, setIsLoading] = useState(false);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);


  async function checkExistingUser() {
    const id = await AsyncStorage.getItem('id');
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate('Auth');
      }
    } catch (error) {
      console.log('Error retrieving the data: ', error);
    }
  }

  async function getFavoriteData() {
    const id = await AsyncStorage.getItem('id');
    const parsedData = JSON.parse(id);
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}api/users/favorite/${parsedData}`
      );
      setLikedRecipes(response.data);
      // console.log(likedRecipes)
    } catch (error) {
      console.log('Error : ', error);
    }finally{
      setIsLoading(false)
    }
  }

    useEffect(() => {
      checkExistingUser();
      getFavoriteData();
    }, []);

  return (
    <View style={styles.containerList}>
    {!userLogin ? <MustLogin navigation={navigation}/> : <View></View>}
      <FlatList
        data={likedRecipes}
        numColumns={2}
        // contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => <RecipeCardView item={item}/>}
      />
    </View>
  );
};

export default LikedRecipesScreen;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
