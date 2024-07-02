import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./foodplanner.style";
import Calendar from "../components/Plan/Calendar";
import ListPlanner from "../components/Plan/ListPlanner";
const FoodPlannerScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Recipe Planner</Text>
        <Calendar />
        <ListPlanner />
      </SafeAreaView>
    );
}

export default FoodPlannerScreen;