// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constant/styles';
import FoodPlannerScreen from './screens/FoodPlannerScreen';
import HomeScreen from './screens/HomeScreen';
import SearchRecipeScreen from './screens/SearchRecipeScreen';
import BasketScreen from './screens/BasketScreen';
import ProfileScreen from './screens/ProfileScreen';
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Tabs() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? Colors.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

      <BottomTabs.Screen
        name="FoodPlanner"
        component={FoodPlannerScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

      <BottomTabs.Screen
        name="SearchRecipe"
        component={SearchRecipeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

      <BottomTabs.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary },
          headerTintColor: 'white',
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary,
            paddingBottom: 6,
          },
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
