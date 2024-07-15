import React, { useEffect, useState } from 'react';
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

const FoodPlannerScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [listFocus, setListFocus] = useState(null);
  const [timeVisible, setTimeVisible] = useState(false);
  const [plannerData, setPlannerData] = useState([]);
  const [time, setTime] = useState('');

  const data = [
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // other recipes...
  ];
  const dataTime = ['Breakfast', 'Lunch', 'Dinner'];

  useEffect(() => {
    checkExistingUser();
    fetchPlannerData();
  }, []);

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

  async function fetchPlannerData() {
    try {
      const data = await AsyncStorage.getItem('plannerData');
      if (data) {
        setPlannerData(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error fetching planner data: ', error);
    }
  }

  const closeModal = () => {
    setModalVisibility(false);
  };

  const saveRecipeToPlanner = async (selectedRecipe, selectedTime) => {
    const newPlannerData = [...plannerData];
    const existingEntryIndex = newPlannerData.findIndex(
      (item) => item.date === selectedDay
    );

    if (existingEntryIndex !== -1) {
      newPlannerData[existingEntryIndex].recipeData.push({
        ...selectedRecipe,
        time: selectedTime,
      });
    } else {
      newPlannerData.push({
        date: selectedDay,
        recipeData: [
          {
            ...selectedRecipe,
            time: selectedTime,
          },
        ],
      });
    }

    setPlannerData(newPlannerData);
    await AsyncStorage.setItem('plannerData', JSON.stringify(newPlannerData));
  };

  const handleDeleteRecipe = async (day, recipeIndex) => {
    const newPlannerData = [...plannerData];
    const dayIndex = newPlannerData.findIndex((item) => item.date === day);

    if (dayIndex !== -1) {
      newPlannerData[dayIndex].recipeData.splice(recipeIndex, 1);

      if (newPlannerData[dayIndex].recipeData.length === 0) {
        newPlannerData.splice(dayIndex, 1);
      }
    }

    setPlannerData(newPlannerData);
    await AsyncStorage.setItem('plannerData', JSON.stringify(newPlannerData));
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
                    data={data}
                    style={{ height: 305, marginBottom: 60, backgroundColor: COLORS.gray2, paddingVertical: 5, borderRadius: 10,}}
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
                          source={{ uri: item.imageUrl }}
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
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() => {
                        saveRecipeToPlanner(data[listFocus], dataTime[time]);
                        setModalVisibility(!modalVisibility);
                      }}
                    >
                      <Ionicons name="add" color={COLORS.wht} size={24} />
                      <Text style={styles.addText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {timeVisible && (
                    <FlatList
                      data={dataTime}
                      style={{ width: '37%'}}
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

{
  /* <Image
          source={require('../assets/image/plannerun.png')}
          style={styles.imageBg}
        />
        <View style={styles.calendarWrapper}>
          <Calendar
            onDayPress={(day) => {
              setSelectedDay(day.dateString);
              setModalVisibility(true);
            }}
            markedDates={{
              [selectedDay]: {
                selected: true,
                selectedColor: COLORS.primary,
              },
            }}
          />
        </View> */
}
