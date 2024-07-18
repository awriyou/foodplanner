import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import MustLogin from '../components/Auth/MustLogin';
import ListPlanner from '../components/Plan/ListPlanner';
import styles from './foodplanner.style';
import { COLORS, SIZES } from '../constant/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import useFetch from '../hook/useFetch';
import { useFocusEffect } from '@react-navigation/native';

const FoodPlannerScreen = ({ navigation }) => {
  const { apiUrl } = useFetch();
  const [selectedDay, setSelectedDay] = useState('');
  const [userLogin, setUserLogin] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [listFocus, setListFocus] = useState(null);
  const [timeVisible, setTimeVisible] = useState(false);
  const [plannerData, setPlannerData] = useState([]);
  const [time, setTime] = useState('');
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const dataTime = ['Breakfast', 'Lunch', 'Dinner'];

  useEffect(() => {
    setSelectedDay(new Date().toISOString().split('T')[0]);
  }, []);
  useFocusEffect(
    useCallback(() => {
      checkExistingUser();
      fetchPlannerData();
      fetchFavoriteRecipes();
    }, [])
  );

  useEffect(() => {
    setIsSaveEnabled(time && listFocus !== null);
  }, [time, listFocus]);

  async function checkExistingUser() {
    const id = await AsyncStorage.getItem('id');
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        setUserLogin(true);
      }
    } catch (error) {
      console.log('Error retrieving the data: ', error);
    }
  }

  async function fetchFavoriteRecipes() {
    const userId = await AsyncStorage.getItem('id'); // Mendapatkan ID user dari AsyncStorage
    const parsedId = JSON.parse(userId);
    if (parsedId !== null) {
      try {
        const response = await axios.get(
          `${apiUrl}api/users/favorite/${parsedId}`
        );
        setFavoriteRecipes(response.data);
      } catch (error) {
        console.log('Error fetching favorite recipes: ', error);
      }
    }
  }

  async function fetchPlannerData() {
    const userId = await AsyncStorage.getItem('id'); // Mendapatkan ID user dari AsyncStorage
    const parsedId = JSON.parse(userId);
    if (parsedId !== null) {
      try {
        const response = await axios.get(
          `${apiUrl}api/users/planner/${parsedId}`
        );
        setPlannerData(response.data);
      } catch (error) {
        console.log('Error fetching planner data: ', error);
      }
    }
  }

  const closeModal = () => {
    setModalVisibility(false);
  };

  const saveRecipeToPlanner = async (selectedRecipe, selectedTime) => {
    const userId = await AsyncStorage.getItem('id'); // Mendapatkan ID user dari AsyncStorage
    const parsedId = JSON.parse(userId);
    const recipeId = selectedRecipe._id; // Asumsikan resep memiliki ID

    try {
      await axios.post(`${apiUrl}api/users/planner`, {
        id: parsedId,
        date: selectedDay,
        time: selectedTime,
        recipeId: recipeId,
      });
      fetchPlannerData(); // Memperbarui data planner setelah menyimpan
      setTime('');
      setListFocus(null);
    } catch (error) {
      console.log('Error adding recipe to planner: ', error);
    }
  };

  const handleDeleteRecipe = async (day, recipeIndex) => {
    const userId = await AsyncStorage.getItem('id'); // Mendapatkan ID user dari AsyncStorage
    const parsedId = JSON.parse(userId);

    const selectedPlanner = plannerData.find(
      (item) => new Date(item.date).toISOString().split('T')[0] === day
    );
    if (!selectedPlanner) {
      console.log('Planner not found for the selected day.');
      return;
    }

    const plannerId = selectedPlanner.id;
    const recipeId = selectedPlanner.recipes[recipeIndex].id;

    try {
      await axios.delete(`${apiUrl}api/users/planner/${parsedId}`, {
        data: {
          plannerId: plannerId,
          recipeId: recipeId,
        },
      });
      fetchPlannerData();
    } catch (error) {
      console.log('Error deleting recipe from planner: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!userLogin ? <MustLogin navigation={navigation} /> : <View></View>}

      <Modal
        visible={modalVisibility}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modal}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <TextInput
                  style={[styles.inputName]}
                  placeholder="Search Recipe"
                />

                <View style={styles.likedRecipeWrapper}>
                  <Text style={styles.titleModal}>Your Liked Recipe</Text>
                  <FlatList
                    data={favoriteRecipes}
                    style={{
                      height: 305,
                      marginBottom: 60,
                      backgroundColor: COLORS.gray2,
                      paddingVertical: 5,
                      borderRadius: 10,
                    }}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onFocus={() => setListFocus(index)}
                        style={[
                          styles.listFavorite,
                          listFocus === index && {
                            backgroundColor: COLORS.secondary,
                          },
                        ]}
                        onPress={() => setListFocus(index)} // Set focus index
                      >
                        <Image
                          source={{ uri: item.recipe_img }}
                          style={styles.imageList}
                        />
                        <Text numberOfLines={1} style={styles.titleList}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
                <View>
                  <View style={styles.footer}>
                    <TouchableOpacity
                      style={styles.timeBtn}
                      onPress={() => setTimeVisible(!timeVisible)}
                    >
                      <Text style={styles.timeText}>
                        {time ? time : 'Time'}
                      </Text>
                      <Ionicons name="list" size={20} />
                    </TouchableOpacity>
                    {isSaveEnabled ? (
                      <TouchableOpacity
                        style={styles.addBtn}
                        onPress={() => {
                          saveRecipeToPlanner(favoriteRecipes[listFocus], time);
                          setModalVisibility(!modalVisibility);
                        }}
                      >
                        <Ionicons name="add" color={COLORS.wht} size={24} />
                        <Text style={styles.addText}>Save</Text>
                      </TouchableOpacity>
                    ) : (
                      <View
                        style={[
                          styles.addBtn,
                          { backgroundColor: COLORS.gray3 },
                        ]}
                      >
                        <Ionicons name="add" color={COLORS.wht} size={24} />
                        <Text style={styles.addText}>Save</Text>
                      </View>
                    )}
                  </View>
                  {timeVisible && (
                    <FlatList
                      data={dataTime}
                      style={{ width: '37%' }}
                      renderItem={({ item, index }) => (
                        <TouchableOpacity
                          style={styles.timeListBtn}
                          onPress={() => {
                            setTime(item);
                            setTimeVisible(!timeVisible);
                          }}
                        >
                          <Text style={styles.timeText}>{item}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Text style={styles.title}>Recipe Planner</Text>
      <Image
        source={require('../assets/image/plannerun.png')}
        style={styles.imageBg}
      />
      <View style={styles.calendarWrapper}>
        <Calendar
          onDayPress={(day) => {
            setSelectedDay(day.dateString);
          }}
          markedDates={{
            [selectedDay]: {
              selected: true,
              marked: true,
              selectedColor: COLORS.secondary,
            },
          }}
          style={{ width: SIZES.width - 70 }}
        />
      </View>
      <ListPlanner
        day={selectedDay}
        navigation={navigation}
        setModalVisibility={setModalVisibility}
        plannerData={plannerData}
        handleDeleteRecipe={handleDeleteRecipe}
      />
    </SafeAreaView>
  );
};

export default FoodPlannerScreen;
