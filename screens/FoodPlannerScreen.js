import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './foodplanner.style';
import { Calendar } from 'react-native-calendars';
import ListPlanner from '../components/Plan/ListPlanner';
import { useState } from 'react';
import { SIZES } from '../constant/styles';

const FoodPlannerScreen = ({navigation}) => {
  const [selectedDay, setSelectedDay] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recipe Planner</Text>
      <Image source={require('../assets/image/plannerun.png')} style={styles.imageBg}/>
      <View style={styles.calendarWrapper}>
        <Calendar
          onDayPress={(day) => {
            setSelectedDay(day.dateString);
          }}
          style={{ width: SIZES.width - 70}}
        />
      </View>
      <ListPlanner day={selectedDay} navigation={navigation}/>
    </SafeAreaView>
  );
};

export default FoodPlannerScreen;
