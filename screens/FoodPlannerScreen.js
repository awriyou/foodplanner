import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './foodplanner.style';
import { Calendar } from 'react-native-calendars';
import ListPlanner from '../components/Plan/ListPlanner';
import { useEffect, useState } from 'react';
import { SIZES } from '../constant/styles';
import MustLogin from '../components/Auth/MustLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FoodPlannerScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
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
  return (
    <SafeAreaView style={styles.container}>
      {userLogin === false ? (
        <MustLogin navigation={navigation} />
      ) : (
        <View></View>
      )}
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
      <ListPlanner day={selectedDay} navigation={navigation} />
    </SafeAreaView>
  );
};

export default FoodPlannerScreen;
