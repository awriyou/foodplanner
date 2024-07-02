// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodPlannerScreen from './screens/FoodPlannerScreen';
import HomeScreen from './screens/HomeScreen';
import SearchRecipeScreen from './screens/SearchRecipeScreen';
import BasketScreen from './screens/BasketScreen';
import ProfileScreen from './screens/ProfileScreen';
import {Ionicons} from '@expo/vector-icons'
import {COLORS, SIZES} from './constant/styles'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import DetailRecipeScreen from './screens/DetailRecipeScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import LikedRecipesScreen from './screens/LikedRecipesScreen';
import SettingScreen from './screens/SettingScreen';





const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Tabs() {
  return (
    <BottomTabs.Navigator screenOptions={screenOptions}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary2 : COLORS.primary}
              />
            );
          },
          headerShown: false,
        }}
      />

      <BottomTabs.Screen
        name="FoodPlanner"
        component={FoodPlannerScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'calendar-sharp' : 'calendar-outline'}
                size={24}
                color={focused ? COLORS.primary2 : COLORS.primary}
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
                name={focused ? 'search-sharp' : 'search-outline'}
                size={24}
                color={focused ? COLORS.primary2 : COLORS.primary}
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
                name={focused ? 'list-sharp' : 'list-outline'}
                size={24}
                color={focused ? COLORS.primary2 : COLORS.primary}
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
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused ? COLORS.primary2 : COLORS.primary}
              />
            );
          },
        }}
      />

    </BottomTabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    light: require('./assets/fonts/Poppins-Light.ttf'),
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    extraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.wht },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailRecipe"
          component={DetailRecipeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{}}
        />
        <Stack.Screen
          name="LikedRecipes"
          component={LikedRecipesScreen}
          options={{}}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
